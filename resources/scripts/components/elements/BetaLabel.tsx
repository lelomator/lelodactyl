import React from 'react';

import { Button } from '@/components/elements/button/index';

const DiscordButton = ({ }) => {
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
            style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px', border: 'none', borderRadius: '30px' }}
        >
            <img src='https://www.svgrepo.com/download/335411/important.svg' alt='Alert' style={logoStyle} />
            Beta Version
        </Button>
    );
};

export default DiscordButton;
