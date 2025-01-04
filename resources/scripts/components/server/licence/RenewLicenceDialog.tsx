// FIXME: replace with radix tooltip
// import Tooltip from '@/components/elements/tooltip/Tooltip';
import { useContext, useEffect, useState } from 'react';

import { Button } from '@/components/elements/button/index';
import { Dialog, DialogWrapperContext } from '@/components/elements/dialog';
import { Input } from '@/components/elements/inputs';

import asDialog from '@/hoc/asDialog';

const DisableTOTPDialog = () => {
    const [submitting, setSubmitting] = useState(false);
    const { close, setProps } = useContext(DialogWrapperContext);

    useEffect(() => {
        setProps((state) => ({ ...state, preventExternalClose: submitting }));
    }, [submitting]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (submitting) return;

        setSubmitting(true);
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
                style={{ marginTop: '10px' }}
            />
            <Dialog.Footer>
                <Button.Text onClick={close}>Abbrechen</Button.Text>
                {/* <Tooltip
                    delay={100}
                    disabled={password.length > 0}
                    content={'You must enter your account password to continue.'}
                > */}
                <Button.Danger type={'submit'} form={'renew-licence-form'} disabled={submitting}>
                    Erneuern
                </Button.Danger>
                {/* </Tooltip> */}
            </Dialog.Footer>
        </form>
    );
};

export default asDialog({
    title: 'Lizenz Erneuern',
    description: 'Um deinen Server Weiter zu verwenden und zu Reaktivieren, musst du deine Lizenz erneuern!',
})(DisableTOTPDialog);
