import type { Metadata } from "next";
import Link from "next/link";
import Pagetitle from "./components/pagetitle";
import { faBriefcaseMedical, faCircleInfo, faEye, faFlag, faLocationDot, faPhone, faCalendarDays, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: "Bats Victoria",
  description: "Information for observation and rescuing within the Yarra Bend Flying Fox colony."
};


const NavLink = ({title, description, url, icon }: { title: string, description: string, url: string, icon: IconDefinition }) => {
  return (
  <>
          <li>
            <Link href={url} className="flex items-center p-3 text-base  rounded-lg bg-gray-900 group  font-semibold ">
              <FontAwesomeIcon icon={icon} className="text-gray-200 " size="2x" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-200  text-xl" >{title}</h2>
                <p className="italic text-gray-200">{description}</p>
              </span>
            </Link>
          </li>
    </>
  )
}



export default function Page() {
  return (
    <>

      <Pagetitle>Bat Monitoring</Pagetitle>

      <div className="w-full p-2 rounded-lg  sm:p-6  ">
        <p className="text-md text-gray-900 font-semibold ">Information for observation and rescuing within the Yarra Bend Flying Fox colony.</p>
        <ul className="my-4 space-y-3">
          <NavLink title="Preparations" description="Safety, Equipment, Guidelines" url="/preparations" icon={faCircleInfo} />
          <NavLink title="Locations" description="Location Terminology" url="/locations" icon={faLocationDot} />
          <NavLink title="What to Look for" description="Sights and Sounds" url="/look" icon={faEye} />
          <NavLink title="Report" description="How to report inc. deceased" url="/report" icon={faFlag} />
          <NavLink title="Rescue and Wrap" description="Vaxxed rescuers only" url="/rescue" icon={faBriefcaseMedical} />
          <NavLink title="Calendar" description="Important dates and bat behaviour" url="/calender" icon={faCalendarDays} />
          
          <NavLink title="Important Contacts" description="For any questions or concerns" url="/contact" icon={faPhone} />
        </ul>

      </div >
    </>
  );
}
