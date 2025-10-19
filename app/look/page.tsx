import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import Batnoise from "@/components/batnoise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faExclamation, faEye, faHeadphones } from "@fortawesome/free-solid-svg-icons";


export default function Page() {
  return (
    <>


      <Pagetitle>What to Look For</Pagetitle>

      <div className="   rounded-lg p-3 md:p-8 mb-2">
        <div className="relative overflow-x-auto sm:rounded-lg">
          
          <table className="w-full text-sm text-left rtl:text-right text-med ">

            <tbody>
              <tr className="   border-gray-200  ">
                <td className="pl-6">
                  <FontAwesomeIcon icon={faEye} className="w-20 h-20  " size="4x" />
                </td>
                <td className="px-6 py-4  ">
                  <h1 className="font-semibold text-2xl ">Look</h1>
                  <p>Look for pups away from their mother or pups low in trees.</p>
                </td>
              </tr>
    
              <tr className="    ">
                <td className="pl-6">
                  <FontAwesomeIcon icon={faHeadphones} className="w-20 h-20  " size="4x" />
                </td>
                <td className="px-6 py-4  ">
                  <h6 className="font-semibold text-2xl ">Listen</h6>
                  <p>Listen for high pitched crying/chirping sounds</p>
                  <h6 className="font-semibold italic">Listen to baby bat cry</h6>
                  <Batnoise/>
                </td>
              </tr>

              <tr className="   ">
                <td className="pl-6">
                  <FontAwesomeIcon icon={faClock} className="w-20 h-20  " size="4x" />
                </td>

                <td className="px-6 py-4  ">
                  <h6 className="font-semibold text-2xl ">Alone for a long period</h6>
                  (Note the location and check on way out)
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-red-300   md:p-6 mb-2 px-2 py-2">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right ">

            <tr className="  ">
              <td className="p-4">
                <FontAwesomeIcon icon={faExclamation} className="w-20 h-20  " size="4x" />
              </td>
              <td className="px-6 py-4  ">
                <h6 className="text-md font-semibold">A very low pup or pups on the ground are in direct danger, may be compromised and/or susceptible to dog attack and will be treated as high priority.</h6>
              </td>
            </tr>

          </table>
        </div>
      </div>


    


       <span><h2 className=" text-3xl font-extrabold mt-5 ms-3">Questions to Consider</h2></span>

      <table>
        <tbody>

          <tr className="">

            <td className="px-6 py-4 ">
   <ul className="pl-5 list-disc">
            <li>Age: How big is it (ie size of your hand? Bigger?)</li>
            <li>Condition:</li>
            <ul className="pl-5 list-disc">
              <li>Lethargic?</li>
              <li>Does it have bright eyes?</li>
              <li>Alone or With Adults?</li>
              <li>Are there adults near by?</li>
              <li>Has baby just fallen & mum is looking for them?</li>
            </ul>
            <li>Call / Crying: Is the sound hoarse? Is the pup quiet?</li>
          </ul>
            </td>
          </tr>
        </tbody>
      </table>







    </>
  )
}
