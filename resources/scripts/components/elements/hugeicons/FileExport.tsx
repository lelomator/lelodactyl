import * as React from 'react';
import { HugeIconProps } from './props';

const HugeIconsFileExport = (props: HugeIconProps) => {
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
                d='M12.875 19.5059C12.3227 19.5059 11.875 19.0581 11.875 18.5059C11.875 17.9536 12.3227 17.5059 12.875 17.5059L17.375 17.5059L17.375 16.9116C17.3749 16.736 17.3747 16.5203 17.3968 16.3439L17.3972 16.3405C17.413 16.2141 17.4848 15.638 18.0504 15.3637C18.6173 15.0887 19.1174 15.3907 19.2256 15.456L19.6941 15.7951C20.0699 16.0897 20.5844 16.4954 20.9754 16.8759C21.1705 17.0657 21.3717 17.283 21.5306 17.5139C21.6718 17.7191 21.875 18.0693 21.875 18.5C21.875 18.9307 21.6718 19.2809 21.5306 19.4861C21.3717 19.717 21.1705 19.9343 20.9754 20.1241C20.5844 20.5046 20.0699 20.9102 19.6941 21.2049L19.2256 21.544C19.1174 21.6093 18.6172 21.9113 18.0504 21.6363C17.4848 21.362 17.413 20.7859 17.3972 20.6595L17.3968 20.6561C17.3747 20.4797 17.3749 20.264 17.375 20.0884L17.375 19.5059L12.875 19.5059Z'
                fill={props.fill}
            />
            <path
                d='M6.81154 22.6472C7.79379 22.75 9.35661 22.75 10.8977 22.75C11.4375 22.75 11.875 22.3124 11.875 21.7727C11.875 21.233 11.4375 20.7954 10.8977 20.7954C9.28909 20.7954 7.88285 20.7941 7.0134 20.7032C6.15948 20.6138 5.67555 20.4471 5.31772 20.194C5.07627 20.0233 4.86389 19.8222 4.6861 19.5978C4.43053 19.2753 4.26109 18.8425 4.16886 18.0558C4.07393 17.246 4.07235 16.1887 4.07235 14.6652L4.07227 11.765C4.07225 11.498 4.07242 10.8595 4.35304 10.3873C4.52597 10.0963 4.74739 9.8532 4.97484 9.72938C5.34135 9.52986 5.76154 9.4165 6.20821 9.4165L7.24858 9.45299C7.62867 9.46088 8.07221 9.44887 8.50036 9.33415C9.33433 9.11069 9.98574 8.45928 10.2092 7.62531C10.3239 7.19716 10.3359 6.75362 10.328 6.37353L10.2915 5.33316C10.2915 4.86547 10.4159 4.45834 10.6333 4.07993C10.76 3.85934 10.9807 3.65745 11.2855 3.48014C11.7476 3.21123 12.301 3.20874 12.6392 3.20722C12.9773 3.20569 13.3341 3.20452 13.6322 3.20452C15.4663 3.20452 16.1334 3.21847 16.6368 3.39582C17.5094 3.70328 18.1751 4.34492 18.4852 5.13029C18.5628 5.32693 18.6177 5.58535 18.6471 6.0333C18.6771 6.48997 18.6776 7.07292 18.6776 7.91318V13.0263C18.6776 13.564 19.1136 14 19.6513 14C20.1891 14 20.625 13.564 20.625 13.0263V7.88C20.625 7.08084 20.625 6.43328 20.5903 5.9047C20.5545 5.36007 20.4789 4.8744 20.2956 4.41024C19.7668 3.07093 18.6584 2.03666 17.2818 1.55166C16.423 1.24907 14.9509 1.24946 13.3959 1.25C10.5563 1.24964 8.86965 1.24943 7.48721 1.73651C5.26721 2.51869 3.49348 4.18143 2.65009 6.31749C2.36897 7.02945 2.24444 7.79416 2.18419 8.711C2.125 9.61171 2.125 10.7243 2.125 12.1426V12.1426V14.7261C2.12498 16.1742 2.12496 17.3469 2.23485 18.2842C2.34896 19.2576 2.59221 20.0955 3.16204 20.8145C3.45722 21.187 3.80577 21.5158 4.19614 21.7919C4.9409 22.3185 5.80212 22.5416 6.81154 22.6472Z'
                fill={props.fill}
            />
        </svg>
    );
};

export default HugeIconsFileExport;
