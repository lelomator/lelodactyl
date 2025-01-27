import { HugeIconProps } from './props';

const HugeIconsServer = (props: HugeIconProps) => {
    return (
        <svg
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            fill={props.fill}
            height='24'
            width='24'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            enableBackground='new 0 0 512 512'
        >
            <g>
                <g>
                    <path d='m391.1,373.9h-57.1v-39.9l16.2,16.1c11.2,11.2 24.9,3.9 28.9-0.1 7.9-8 7.9-20.9-0.1-28.9l-51-50.6c-8-7.9-20.8-7.9-28.8,0l-51,50.6c-8,7.9-8.1,20.9-0.1,28.9 7.9,8 20.9,8.1 28.9,0.1l16.2-16.1v39.8h-170.3c-38.6,0-70.1-31.4-70.1-70 0-38.6 31.4-70.1 70.1-70.1h268.2c38.6,0 70,31.4 70,70.1 0.1,38.6-31.4,70.1-70,70.1zm-338.3-251c-1.42109e-14-38.6 31.4-70 70.1-70h268.2c38.6,0 70,31.4 70,70 0,38.6-31.4,70.1-70,70.1h-268.2c-38.6-0.1-70.1-31.5-70.1-70.1zm402.4,90.4c28.3-20.1 46.8-53.2 46.8-90.5 0-61.1-49.7-110.8-110.9-110.8h-268.2c-61.2,0-110.9,49.7-110.9,110.9 0,37.3 18.5,70.4 46.8,90.5-28.3,20.1-46.8,53.1-46.8,90.4 0,61.1 49.7,110.9 110.9,110.9h170.3v66.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-66.9h57.1c61.1,0 110.9-49.7 110.9-110.9 0-37.3-18.5-70.3-46.8-90.5z' />
                    <path d='m113.3,143.3h8.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-8.9c-11.3,0-20.4,9.1-20.4,20.4-0.1,11.3 9.1,20.4 20.4,20.4z' />
                    <path d='m189.8,143.3h8.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-8.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4z' />
                    <path d='m126.7,283.4h-8.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h8.9c11.3,0 20.4-9.1 20.4-20.4-2.84217e-14-11.3-9.2-20.4-20.4-20.4z' />
                    <path d='m203.2,283.4h-8.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h8.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z' />
                </g>
            </g>
        </svg>
    );
};

export default HugeIconsServer;
