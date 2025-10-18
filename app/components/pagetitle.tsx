import { ReactNode } from "react";


//insert code for app between return (         )}
export default function Pagetitle({ children }: { children: ReactNode }) {
    return (


        <>
            <span>
                <h2 className="text-gray-900  text-3xl font-extrabold mb-2 m-3">
                    {children}
                </h2>
            </span>


        </>
    )
}
