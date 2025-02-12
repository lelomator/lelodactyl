import { Dialog } from '@/components/elements/dialog';

import Code from '../elements/Code';

interface Props {
    apiKey: string;
    setApiKey: (key: string) => void;
}

const ApiKeyModal = ({ apiKey, setApiKey }: Props) => {
    return (
        <div className='p-6 space-y-6 max-w-lg mx-auto rounded-lg shadow-lg'>
            <Dialog.Confirm
                title={'API Schlüssel Löschen'}
                confirm={'Ok'}
                open={!!apiKey}
                onClose={() => setApiKey('')} // API Key zurücksetzen
                onConfirmed={() => console.log('API Key gelöscht')}
            >
                Dies ist dein API Schlüssel: <br />
                <Code>{apiKey}</Code> <br></br>
                <p style={{ fontSize: '15px', color: '#fc4949' }}>
                    Speichere ihn an einem sicherem Ort, da dieser nicht mehr angezeigt werden kann!
                </p>
            </Dialog.Confirm>
        </div>
    );
};

export default ApiKeyModal;
