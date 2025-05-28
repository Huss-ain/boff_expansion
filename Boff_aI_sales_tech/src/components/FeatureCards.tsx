import { Children } from "react";

export default function FeatureCard(props: { 
    title: string,
    description: string, 
    children?: React.ReactNode;
}) {
    const { title, description, children } = props;
    return (
        <div className="bg-[#ece2cb] border border-white/10 p-4 sm:p-6 rounded-3xl mx-4 sm:mx-auto max-w-md w-[calc(100%-2rem)] h-full ">
            <div className="aspect-video flex items-center justify-center">{children}</div>
            <div >
                <h3 className="text-2xl text-[#3E3232] font-semibold mt-6">{title}</h3>
                <p className="text-l text-[#3E3232] tracking-tight justify-normal mt-2"> {description}</p>
            </div>
            
        </div>
    )

}