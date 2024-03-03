import * as React from 'react';
import { HugeIconProps } from './props';

const HugeIconsFileDownload = (props: HugeIconProps) => {
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
                d='M16.5635 1.47773C15.5812 1.37497 14.3484 1.37499 12.8073 1.375H11.9773C11.4375 1.375 11 1.81255 11 2.35229C11 2.89203 11.4375 3.32957 11.9773 3.32957H12.7524C14.361 3.32957 15.4922 3.33082 16.3616 3.42177C17.2155 3.5111 17.6994 3.67786 18.0573 3.9309C18.2987 4.10165 18.5111 4.30274 18.6889 4.5271C18.9445 4.84959 19.1139 5.28238 19.2061 6.06917C19.3011 6.87893 19.3026 7.93626 19.3026 9.45971L19.3027 12.3599C19.3027 12.6269 19.3026 13.2655 19.022 13.7376C18.849 14.0286 18.6276 14.2717 18.4002 14.3956C18.0336 14.5951 17.6135 14.7084 17.1668 14.7084L16.1264 14.6719C15.7463 14.6641 15.3028 14.6761 14.8746 14.7908C14.0407 15.0142 13.3893 15.6656 13.1658 16.4996C13.0511 16.9278 13.0391 17.3713 13.047 17.7514L13.0835 18.7918C13.0835 19.2595 12.9591 19.6666 12.7417 20.045C12.615 20.2656 12.3943 20.4675 12.0895 20.6448C11.6274 20.9137 11.074 20.9162 10.7358 20.9177C10.3977 20.9192 10.0409 20.9204 9.74284 20.9204C7.90872 20.9204 7.24159 20.9065 6.73823 20.7291C5.8656 20.4216 5.1999 19.78 4.88981 18.9946C4.81217 18.798 4.75733 18.5396 4.72789 18.0916C4.69788 17.635 4.69739 17.052 4.69739 16.2118V12.0987C4.69739 11.5609 4.26145 11.125 3.72369 11.125C3.18594 11.125 2.75 11.5609 2.75 12.0987V16.2449C2.74999 17.0441 2.74999 17.6916 2.78473 18.2202C2.82052 18.7649 2.89613 19.2505 3.0794 19.7147C3.60821 21.054 4.71664 22.0883 6.0932 22.5733C6.952 22.8759 8.42408 22.8755 9.97909 22.8749C12.8187 22.8753 14.5054 22.8755 15.8878 22.3884C18.1078 21.6062 19.8815 19.9435 20.7249 17.8074C21.006 17.0955 21.1306 16.3308 21.1908 15.4139C21.25 14.5132 21.25 13.4006 21.25 11.9823V9.3988C21.25 7.95071 21.25 6.77806 21.1402 5.84073C21.026 4.86733 20.7828 4.02945 20.213 3.31039C19.9178 2.9379 19.5692 2.60912 19.1789 2.33307C18.4341 1.80641 17.5729 1.58332 16.5635 1.47773Z'
                fill={props.fill}
            />
            <path
                d='M8.00586 2.125C8.00586 1.57272 7.55814 1.125 7.00586 1.125C6.45357 1.125 6.00586 1.57272 6.00586 2.125L6.00586 6.62504L5.4116 6.62502C5.23596 6.62489 5.02031 6.62474 4.84387 6.64681L4.84053 6.64723C4.71408 6.663 4.13804 6.73483 3.86368 7.30043C3.58872 7.86725 3.89065 8.36739 3.95597 8.4756L4.29511 8.94408C4.58975 9.31991 4.99545 9.83437 5.37588 10.2254C5.56571 10.4205 5.78297 10.6217 6.01388 10.7806C6.21914 10.9218 6.56933 11.125 7 11.125C7.43067 11.125 7.78086 10.9218 7.98612 10.7806C8.21703 10.6217 8.43429 10.4205 8.62412 10.2254C9.00455 9.83437 9.41025 9.31992 9.70488 8.94409L10.044 8.47559C10.1093 8.36739 10.4113 7.86725 10.1363 7.30043C9.86196 6.73483 9.28592 6.66299 9.15947 6.64723L9.15613 6.64681C8.97969 6.62474 8.76403 6.62489 8.5884 6.62502L8.00586 6.62504L8.00586 2.125Z'
                fill={props.fill}
            />
        </svg>
    );
};

export default HugeIconsFileDownload;
