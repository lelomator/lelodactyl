import React from 'react';

import { Button } from '@/components/elements/button/index';

const DiscordButton = ({ children = 'Komm auf Discord!' }) => {
    const logoStyle = {
        width: '30px',
        height: '30px',
        marginRight: '10px',
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        border: 'none',
    };

    function openNewPage() {
        window.open('https://discord.gg/MHmt6Yf2p5', '_blank'); // Öffnet die Seite in einem neuen Tab
    }

    return (
        <Button
            rel='noopener noreferrer'
            onClick={openNewPage}
            style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px', border: 'none' }}
        >
            <img src='https://www.svgrepo.com/show/353655/discord-icon.svg' alt='Discord Logo' style={logoStyle} />
            {children}
        </Button>
    );
};

export default DiscordButton;
