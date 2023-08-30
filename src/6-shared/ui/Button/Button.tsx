import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum VariantButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: VariantButton
}

const Button: FC<ButtonProps> = (props) => {
    const {className,
        children,
        variant,
        ...otherProps} = props
    return (

        <button
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;