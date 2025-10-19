import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import ContactItem from "@/components/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  faTruckMedical } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <>

      <Pagetitle>Important Contacts</Pagetitle>

      <div className="w-full  p-4 0  sm:p-6   mb-2">
        <p className="text-md  text-gray-900  font-semibold">For any enquiries, questions or concerns</p>
        <ul className="my-4 space-y-3  ">

          <ContactItem name="Tamsyn" url="#" icon="/images/bat_logo-02.svg" >Fly by Night <li className="text-xs">click to copy number</li></ContactItem> 
          <ContactItem name="Emma" url="#" icon="/images/bat_logo-02.svg" >Fly by Night<li className="text-xs">click to copy number</li></ContactItem>
          <ContactItem name="Megan" url="#" icon="/images/bat_logo-01.svg">Friends of Bats & Bushcare</ContactItem>

          {/* 
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold           
              </span> 
            </a>
          </li>


          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Emma</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
              <img src={ImageFFOB} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Megan</h2>
                <p className="italic">Friends of Bats and Bushcare</p>
              </span>
            </a>
          </li>
        */}

          <li>
            <a  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-900    ">
               <FontAwesomeIcon icon={faWhatsapp} className="text-gray-200  " size="4x" />

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-200 text-xl  " >What&apos;s App  </h2>
                <p className="italic text-gray-200">Bat Observation Chat </p>
                <p className="text-xs italic text-gray-200">Contact Tamsyn for invite</p>

              </span>
            </a>
          </li>





        </ul>

      </div>


<div className="w-full p-4 mb-4   sm:p-6  bg-yellow-200">
      <div className="grid  gap-8 ">
            <table className="w-full text-sm  ">
              <tr className="">
              <td className="p-2">
              <FontAwesomeIcon icon={faTruckMedical} className=" " size="4x" />
                </td>
                <td className="px-2 py-2 text-gray-900 ">
                  <h3 className="text-gray-900  text-xl font-extrabold ">Human Emergency</h3>
                  <h1 className="font-semibold">Emergency ID: YBP207</h1>
                  <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services (000)</p>
                </td>
              </tr>
            </table>
        </div>
        </div>
      <span className="block text-sm  text-center align-bottom "> ©2025 Fly By Night & FOBB</span>
      <span className="block text-xs  text-center align-bottom "> <a href="https://kimberleylawrence.com/">App built by KLD</a></span>

    </>
  )
}
