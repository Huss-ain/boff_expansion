import { HTMLAttributes } from "react";
import { twMerge } from 'tailwind-merge';

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("", className)} {...otherProps}>
            <span>&#10038;</span>
            <span>{children}</span>
        </div>
    );
}