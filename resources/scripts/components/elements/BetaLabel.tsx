import { useState } from 'react';

import { Button } from '@/components/elements/button/index';

import { Dialog } from './dialog';

// Dein Custom-Dialog-Component importieren

const DiscordButton = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const logoStyle = {
        width: '30px',
        height: '30px',
        marginRight: '10px',
    };

    // Funktion, um den Dialog zu öffnen
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    // Funktion, um den Dialog zu schließen
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Funktion, um den Discord-Link zu öffnen
    const handleConfirm = () => {
        window.open('https://discord.gg/MHmt6Yf2p5', '_blank');
        handleCloseDialog(); // Schließt den Dialog nach Bestätigung
    };

    return (
        <>
            <Button
                rel='noopener noreferrer'
                onClick={handleClickOpen} // Öffnet den Dialog
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '30px',
                }}
            >
                <img src='https://www.svgrepo.com/download/335411/important.svg' alt='Alert' style={logoStyle} />
                Beta Version
            </Button>

            {/* Dein Custom-Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog} // Schließt den Dialog
                //onConfirmed={handleConfirm} // Führt die Aktion bei Bestätigung aus
                title='Beta Version'
                description='Da dieser Hosting Anbieter im moment noch in der Beta Version ist, können regelmäßig Fehler auftreten und die Webseite kann sich auch noch verändern.'
            >
                {/*  <br />
                <p>Falls du Auf unseren Support Server beitreten möchtest, klicke auf 'Beitreten'.</p> */}
                <Dialog.Footer>
                    <Button.Text onClick={handleCloseDialog}>Abbrechen</Button.Text>
                    {/* <Button.Danger onClick={handleConfirm}>Beitreten</Button.Danger> */}
                </Dialog.Footer>
            </Dialog>
        </>
    );
};

export default DiscordButton;
