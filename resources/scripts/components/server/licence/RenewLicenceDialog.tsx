import { useContext, useEffect, useState } from 'react';

import { Button } from '@/components/elements/button/index';
import { Dialog, DialogWrapperContext } from '@/components/elements/dialog';
import { Input } from '@/components/elements/inputs';

import asDialog from '@/hoc/asDialog';

const DisableTOTPDialog = () => {
    const [submitting, setSubmitting] = useState(false);
    const [licence, setLicence] = useState('');
    const [error, setError] = useState('');
    const { close, setProps } = useContext(DialogWrapperContext);

    useEffect(() => {
        setProps((state) => ({ ...state, preventExternalClose: submitting }));
    }, [submitting]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (licence.trim() === '') {
            setError('Bitte gib deinen Lizenz-Token ein.');
            return;
        }

        setSubmitting(true);
        setError('');
        close();
        setSubmitting(false);
    };

    return (
        <form id={'renew-licence-form'} className={'mt-6'} onSubmit={submit}>
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
                style={{ marginTop: '10px', borderColor: error ? 'red' : undefined }}
            />
            {error && (
                <p
                    style={{
                        color: '#ad2626',
                        fontSize: '0.875rem',
                        marginTop: '5px',
                        marginLeft: '3px',
                        fontWeight: '600',
                    }}
                >
                    {error}
                </p>
            )}
            <Dialog.Footer>
                <Button.Text onClick={close}>Abbrechen</Button.Text>
                <Button.Text
                    type={'submit'}
                    form={'renew-licence-form'}
                    disabled={submitting}
                    /*style={{ background: "#2d8c42" }}*/
                >
                    Erneuern
                </Button.Text>
            </Dialog.Footer>
        </form>
    );
};

export default asDialog({
    title: 'Lizenz Erneuern',
    description: 'Um deinen Server Weiter zu verwenden und zu Reaktivieren, musst du deine Lizenz erneuern!',
})(DisableTOTPDialog);
