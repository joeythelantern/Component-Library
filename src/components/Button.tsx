import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    style?: React.CSSProperties;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, style } = props;

    return (
        <button
            style={{
                ...style,
                backgroundColor: backgroundColor || 'black',
                color: 'white'
            }}
            {...props}
        >
            {children}
        </button>
    );
};
