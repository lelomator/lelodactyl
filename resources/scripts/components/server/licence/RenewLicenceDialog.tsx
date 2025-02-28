import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/elements/button/index';
import { Dialog, DialogWrapperContext } from '@/components/elements/dialog';
import { Input } from '@/components/elements/inputs';

import asDialog from '@/hoc/asDialog';

import { ServerContext } from '@/state/server';

const DisableTOTPDialog = ({ onLicenceRenewed }) => {
    const [submitting, setSubmitting] = useState(false);
    const [licence, setLicence] = useState('');
    const [error, setError] = useState('');
    const { close, setProps } = useContext(DialogWrapperContext);

    const id = ServerContext.useStoreState((state) => state.server.data!.id);

    useEffect(() => {
        setProps((state) => ({ ...state, preventExternalClose: submitting }));
    }, [submitting]);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (licence.trim() === '') {
            setError('Du musst einen Lizenz-Token eingeben!');
            return;
        }

        try {
            const backend_url = (window as unknown as { backend_url?: string }).backend_url || '';
            const response = await fetch(`${backend_url}/api/reaktivate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    licence: licence,
                    serverId: id,
                }),
            });

            if (!response.ok) {
                toast.error('Deine Lizenz konnte nicht erneuert werden.');
                setSubmitting(false);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            toast.success(
                'Deine Lizenz wurde erfolgreich erneuert. Um deinen Server wieder zu verwalten musst du eventuell die Seite neu laden.',
            );
            setSubmitting(false);
            const data = await response.json();

            if (onLicenceRenewed) {
                onLicenceRenewed(); // Funktion aus der Hauptdatei ausführen
            }
        } catch (error) {
            console.log(`Deine Lizenz konnte nicht erneuert werden.`);
            setSubmitting(false);
        }

        setSubmitting(true);
        setError('');
        close();
        setSubmitting(false);
    };

    return (
        <form id={'renew-licence-form'} className={'mt-3'} onSubmit={submit}>
            <label className={'block pb-1'} htmlFor={'new-licence'}>
                Lizenz-Token:
            </label>
            <Input.Text
                id={'new-licence'}
                type={'text'}
                variant={Input.Text.Variants.Loose}
                placeholder='Gib deine Lizenz ein...'
                autoComplete='off'
                value={licence}
                onChange={(e) => setLicence(e.target.value)}
                style={{ marginTop: '5px', borderColor: error ? 'red' : undefined }}
            />
            {error && (
                <p
                    style={{
                        color: '#ad2626',
                        fontSize: '0.875rem',
                        marginTop: '5px',
                        marginLeft: '5px',
                        fontWeight: '600',
                    }}
                >
                    {error}
                </p>
            )}
            <Dialog.Footer>
                <Button.Text onClick={close}>Abbrechen</Button.Text>
                <Button type={'submit'} form={'renew-licence-form'} disabled={submitting}>
                    Erneuern
                </Button>
            </Dialog.Footer>
        </form>
    );
};

export default asDialog({
    title: 'Lizenz Erneuern',
    description: 'Um deinen Server Weiter zu verwenden und zu Reaktivieren, musst du deine Lizenz erneuern!',
})(DisableTOTPDialog);
