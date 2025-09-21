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

      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mb-2">
        <p className="text-md font-normal text-gray-500 dark:text-gray-400">For any enquiries, questions or concerns</p>
        <ul className="my-4 space-y-3">

          <ContactItem name="Tamsyn" url="#" icon="" >Fly by Night</ContactItem> 
          <ContactItem name="Emma" url="#" icon="" >Fly by Night</ContactItem>
          <ContactItem name="Megan" url="#" icon="">Friends of Bats & Bushcare</ContactItem>

          {/* 
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold           
              </span> 
            </a>
          </li>


          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Emma</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFFOB} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Megan</h2>
                <p className="italic">Friends of Bats and Bushcare</p>
              </span>
            </a>
          </li>
        */}

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
               <FontAwesomeIcon icon={faWhatsapp} className="text-black dark:text-white " size="4x" />

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl " >What&apos;s App  </h2>
                <p className="italic">Bat Observation Chat</p>

              </span>
            </a>
          </li>





        </ul>

      </div>


<div className="w-full p-4 mb-4  border border-gray-200 rounded-lg shadow-sm sm:p-6  bg-yellow-200">
      <div className="grid  gap-8 ">
            <table className="w-full text-sm  dark:text-gray-400">
              <tr className="">
              <td className="p-2">
              <FontAwesomeIcon icon={faTruckMedical} className="text-black " size="4x" />
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
      <span className="block text-sm text-gray-500 text-center align-bottom dark:text-gray-400"> ©2025 Fly By Night & FOBB</span>
      <span className="block text-xs text-gray-500 text-center align-bottom dark:text-gray-400"> <a href="https://kimberleylawrence.com/">App built by KLD</a></span>

    </>
  )
}
