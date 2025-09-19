import { faCircleInfo, faHome, faLifeRing, faPhone, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


export function FooterButton({ name, route, icon }: { name: string, route: string, icon: IconDefinition }) {
    return (
        <>
            <Link href={route} className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <FontAwesomeIcon icon={icon} className="text-gray-800 dark:text-white fa-2xl" />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{name}</span>
            </Link >
        </>
    )
}

//insert code for app between return (         )}
export default function Footer() {
    return (
        <>


            <br />
            <br />
            <br />
            <br />



            <div className="fixed bottom-0 left-0 z-70 w-full h-20 bg-white border-t border-gray-200  md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">

                    <FooterButton name="Home" route="/" icon={faHome} />
                    <FooterButton name="Prepare" route="/preparations" icon={faCircleInfo} />
                    <FooterButton name="Rescue" route="/rescue" icon={faLifeRing} />
                    <FooterButton name="Contact" route="/contact" icon={faPhone} />

                </div>

            </div >


        </>
    )
}
