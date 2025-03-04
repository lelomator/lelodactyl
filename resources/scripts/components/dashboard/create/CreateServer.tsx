import { useStoreState } from 'easy-peasy';
import posthog from 'posthog-js';
import { useState } from 'react';
import { toast } from 'sonner';

import FlashMessageRender from '@/components/FlashMessageRender';
import ContentBox from '@/components/elements/ContentBox';
import { MainPageHeader } from '@/components/elements/MainPageHeader';
import PageContentBlock from '@/components/elements/PageContentBlock';
import ScreenBlock from '@/components/elements/ScreenBlock';
import { Button } from '@/components/elements/button/index';
import { Input } from '@/components/elements/inputs';

export default () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [licence, setLicence] = useState('');
    const [error, setError] = useState('');

    const uuid: string | undefined = useStoreState((state) => state.user.data?.uuid);

    const createServer = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);

        console.log(licence);

        const backend_url = (window as unknown as { backend_url?: string }).backend_url || '';

        try {
            const response = await fetch(`${backend_url}/api/create-server`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    licence: licence,
                    uuid: uuid,
                }),
            });

            if (!response.ok) {
                toast.error('Server konnte nicht erstellt werden!');
                setSubmitting(false);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            toast.success(
                'Dein Server wurde Erfolgreich erstellt. Du kannst ihn in wenigen Sekunden auf deinem Dashbord verwalten.',
            );
            setSubmitting(false);
            const data = await response.json();
        } catch (error) {
            console.log(`Server konnte nicht erstellt werden!`);
            setSubmitting(false);
        }
    };

    posthog.onFeatureFlags(function () {
        if (!posthog.isFeatureEnabled('server_creation')) {
            console.log('Server creation is disabled');
        }
    });

    if (posthog.isFeatureEnabled('server_creation')) {
        return (
            <PageContentBlock title={'Server Erstellen'}>
                <FlashMessageRender byKey={'create'} />
                <MainPageHeader title={'Server Erstellen'} />
                <h1 style={{ marginBottom: '10px' }}>
                    Hier kannst du einen neuen Server zu deinem Account Hinzufügen.
                </h1>

                <ContentBox title={'Server Lizenz eingeben'}>
                    <form onSubmit={createServer}>
                        <div className={`mt-4`}>
                            <Input.Text
                                id={'licence'}
                                type={'text'}
                                variant={Input.Text.Variants.Loose}
                                placeholder='Deine Lizenz...'
                                autoComplete='off'
                                value={licence}
                                onChange={(e) => setLicence(e.target.value)}
                                style={{ borderColor: error ? 'red' : undefined, maxWidth: '500px' }}
                            />
                            <p style={{ fontSize: '14px', marginTop: '5px', marginLeft: '3px' }}>
                                Sobald du deinen Server erstellst, kannst du ihn wenige minuten später auf deinem
                                Dashboard
                                <br></br>
                                verwalten und eine Software installieren.
                            </p>
                        </div>
                        <div className={`mt-3`}>
                            <Button disabled={isSubmitting} type='submit' style={{ marginTop: '0px' }}>
                                Server Ertsellen
                            </Button>
                        </div>
                    </form>
                </ContentBox>
            </PageContentBlock>
        );
    } else {
        return (
            <ScreenBlock
                title={'Server Erstellung nicht Möglich!'}
                message={'Im moment sind leider keine Server erstellungen möglich, da sie deaktiviert wurde!'}
            />
        );
    }
};
