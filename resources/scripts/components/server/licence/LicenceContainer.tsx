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
import DisableTOTPDialog from '@/components/server/licence/RenewLicenceDialog';

import { ServerContext } from '@/state/server';

export default () => {
    const username = useStoreState((state) => state.user.data!.username);
    const id = ServerContext.useStoreState((state) => state.server.data!.id);
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const node = ServerContext.useStoreState((state) => state.server.data!.node);
    const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);

    const [visible, setVisible] = useState<'true' | null>(null);

    //useEffect(() => {
    //    return () => {
    //        clearAndAddHttpError();
    //    };
    //}, [visible]);

    return (
        <ServerContentBlock title={'Lizenz'}>
            <FlashMessageRender byKey={'licence'} />
            <MainPageHeader title={'Lizenz'} />
            <DisableTOTPDialog open={visible === 'true'} onClose={() => setVisible(null)} />
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
                    <CopyOnClick text={`${username}.${id}`}>
                        <code className={`font-mono bg-zinc-900 rounded py-1 px-2`}>{`${username}.${id}`}</code>
                    </CopyOnClick>
                </div>
                <div className={`mt-6 flex items-center`}>
                    <div className={`flex-1`}>
                        <div className={`border-l-4 border-brand p-3`}>
                            <p className={`text-xs text-zinc-200`}>Eine Lizenz kann nur ein mal Verwendet werden!</p>
                        </div>
                    </div>
                    <div className={`ml-4`}>
                        <a href={`#`}>
                            <Button onClick={() => setVisible('true')}>Lizenz Erneuern</Button>
                        </a>
                    </div>
                </div>
            </TitledGreyBox>
        </ServerContentBlock>
    );
};
