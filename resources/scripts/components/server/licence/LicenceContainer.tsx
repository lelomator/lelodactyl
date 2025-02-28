import { useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';

import FlashMessageRender from '@/components/FlashMessageRender';
import CopyOnClick from '@/components/elements/CopyOnClick';
import Label from '@/components/elements/Label';
import { MainPageHeader } from '@/components/elements/MainPageHeader';
import ServerContentBlock from '@/components/elements/ServerContentBlock';
import TitledGreyBox from '@/components/elements/TitledGreyBox';
import { Button } from '@/components/elements/button/index';
import RenewLicenceDialog from '@/components/server/licence/RenewLicenceDialog';

import { ServerContext } from '@/state/server';

export default () => {
    const username = useStoreState((state) => state.user.data!.username);
    const id = ServerContext.useStoreState((state) => state.server.data!.id);
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const node = ServerContext.useStoreState((state) => state.server.data!.node);
    const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);

    /**/
    const [expired, setExpired] = useState('null');
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState<'true' | null>(null);

    const fetchLicenceValidity = async () => {
        try {
            const backend_url = (window as unknown as { backend_url?: string }).backend_url || '';
            const response = await fetch(`${backend_url}/api/licences/${id}`);
            const data = await response.json();
            if (response.ok && data.success) {
                setExpired(data.data.toString());
            } else {
                setExpired('null');
            }
        } catch (error) {
            console.error('Fehler bei der Anfrage:', error);
            setExpired('null');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLicenceValidity();
    }, [id]);

    const handleLicenceRenewed = () => {
        fetchLicenceValidity();
    };

    if (loading) {
        return (
            <ServerContentBlock title={'Laden...'}>
                <MainPageHeader title={'Laden...'} />
                <h1 style={{ marginBottom: '10px' }}>Lizenzinformationen werden geladen...</h1>
            </ServerContentBlock>
        );
    }

    if (expired == 'null') {
        return (
            <ServerContentBlock title={'Fehler'}>
                <MainPageHeader title={'Fehler'} />
                <h1 style={{ marginBottom: '10px' }}>
                    Wir konnten gerade keine Verbindung mit dem Server herstelln. Versuche es Später erneut.
                </h1>
            </ServerContentBlock>
        );
    }

    return (
        <ServerContentBlock title={'Lizenz'}>
            <FlashMessageRender byKey={'licence'} />
            <MainPageHeader title={'Lizenz'} />
            <RenewLicenceDialog
                open={visible === 'true'}
                onClose={() => setVisible(null)}
                onLicenceRenewed={handleLicenceRenewed}
            />
            <h1 style={{ marginBottom: '10px' }}>Hier kannst du deine Server-Lizenz Verwalten und Erneuern!</h1>
            <TitledGreyBox title={'Lizenz Details'} className={`mb-6 md:mb-10`}>
                <div className={`flex items-center justify-between text-sm`}>
                    <Label>Server ID</Label>
                    <CopyOnClick text={`${id}`}>
                        <code className={`font-mono bg-zinc-900 rounded py-1 px-2`}>{`${id}`}</code>
                    </CopyOnClick>
                </div>
                <div className={`mt-2 flex items-center justify-between text-sm`}>
                    <Label>Gültigkeit</Label>
                    <span>
                        {expired == 'false' ? (
                            <code className={`font-mono bg-zinc-900 rounded py-1 px-2 text-green-500`}>{`Gültig`}</code>
                        ) : null}
                        {expired == 'true' ? (
                            <code className={`font-mono bg-zinc-900 rounded py-1 px-2 text-red-500`}>{`Ungültig`}</code>
                        ) : null}
                    </span>
                </div>
                <div className={`mt-6 flex items-center`}>
                    <div className={`flex-1`}>
                        <div className={`border-l-4 border-brand p-3`}>
                            <p className={`text-xs text-zinc-200`}>Eine Lizenz kann nur ein mal verwendet werden!</p>
                        </div>
                    </div>
                    <div className={`ml-4`}>
                        {expired == 'true' && (
                            <a>
                                <Button onClick={() => setVisible('true')}>Lizenz Erneuern</Button>
                            </a>
                        )}
                    </div>
                </div>
            </TitledGreyBox>
        </ServerContentBlock>
    );
};
