import { ReactNode } from "react";


export default function ContactItem({ name, url, icon, children }: { name: string, url: string, icon: string, children: ReactNode }) {
    return (
        <>
            <li>
                <a href={url} className="flex items-center p-3 text-base font-bold text-gray-200 rounded-lg bg-gray-900 group ">
                    {icon ?
                        <img src={icon} className="w-20 md:w-15 max-w-full max-h-full" alt="" />
                        :
                        <>
                            <span className="w-20 md:w-15 max-w-full max-h-full"></span>
                        </>
                    }
                    <span className="flex-1 ms-3 whitespace-nowrap ">
                        <h2 className="font-bold text-gray-200 text-xl " >{name}</h2>
                        <p className="italic ">{children}</p>
                    </span>
                </a>
            </li>

        </>
    )
};