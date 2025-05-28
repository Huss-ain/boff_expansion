import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps} = props;
    return (
        <div className={twMerge("size-16 rounded-full overflow-hidden border-4 border-[#3C3003]", className)} {...otherProps}>
            {children}
        </div>
    );
}