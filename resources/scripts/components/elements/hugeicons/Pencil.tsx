import * as React from 'react';
import { HugeIconProps } from './props';

const HugeIconsPencil = (props: HugeIconProps) => {
    return (
        <svg
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 19.75C10 19.1977 10.4477 18.75 11 18.75H17C17.5523 18.75 18 19.1977 18 19.75C18 20.3023 17.5523 20.75 17 20.75H11C10.4477 20.75 10 20.3023 10 19.75Z'
                fill={props.fill}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.1538 5.98203L6.36945 13.7664C5.40084 14.7347 4.80884 15.3266 4.40167 16.0553C4.17455 16.4617 3.97615 17.0782 3.8006 17.709C3.62 18.358 3.44221 19.1047 3.27249 19.8175L3.27041 19.8263C3.21009 20.0796 3.28552 20.3462 3.46969 20.5303C3.65385 20.7145 3.92037 20.7899 4.17373 20.7296L4.18242 20.7275L4.18262 20.7275L4.18294 20.7274C4.8956 20.5577 5.64214 20.38 6.29098 20.1994C6.92183 20.0239 7.53832 19.8255 7.94476 19.5983C8.67342 19.1912 9.26526 18.5992 10.2337 17.6306L18.018 9.84622L14.1538 5.98203ZM19.0786 8.78556L19.9497 7.91448C21.0168 6.84742 21.0168 5.11736 19.9497 4.0503C18.8827 2.98323 17.1526 2.98323 16.0855 4.0503L15.2145 4.92137L19.0786 8.78556Z'
                fill={props.fill}
            />
        </svg>
    );
};

export default HugeIconsPencil;
