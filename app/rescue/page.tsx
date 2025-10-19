import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import { Modal } from "@/components/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock} from "@fortawesome/free-solid-svg-icons";



const ImageBatWap1 = '/images/bat_wrap_images_1.png';
const ImageBatWap2 = '/images/bat_wrap_images_2.png';
const ImageRecuedBat = '/images/bat_in_towel.jpg';

export default function Page() {
  return (
    <>


      <Modal />
      <Pagetitle>Rescue and Wraps</Pagetitle>
<div className="w-full p-4 bg-red-300 sm:p-6  mb-2 text-gray-200">
 
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right ">

            <tbody>
            <tr className="">
              <td className="p-1">
                <FontAwesomeIcon icon={faClock} className="w-20 h-20  " size="4x" />

              </td>
              <td className="px-6 py-4  ">
                <h6 className="text-md">Being Vaccinated does <u>NOT</u> mean you should rescue. <strong className="font-semibold">Minimum 24hr monitoring should occur before any intervention for Non-Urgent cases.</strong></h6>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
 </div>

      <section className=" ">
        <div className=" mx-auto max-w-screen-xl ">
          <div className="grid ">
            <div className=" rounded-lg mb-5 md:p-12">
  <div className="relative sm:rounded-lg"><span><h2 className="  text-3xl font-extrabold m-3">How to Wrap</h2></span> </div>
             
              <img src={ImageBatWap1} alt="" className="flex-shrink-0" />
              <ul className="max-w-md space-y-1 list-disc list-inside pl-2 m-2 text-md font-semibold">

                <li>Open Wrap</li>
                <li >Place dummy in mouth before or during wrapping process</li>
              </ul>
         <img src={ImageBatWap2} alt="" className="flex-shrink-0" />

              <ul className="max-w-md space-y-1 list-disc list-inside pl-2 m-2 text-md font-semibold ">
                <li>Place bats tummy on the stuffing side of the roll (Bat will grab on with feet like they
                  do with their mums)</li>
                <li>Hold the baby in place gently but firmly, proceed to wrap around the body. (NB You can
                  cover the babies head)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full  sm:p-6   mb-2">

         
            
<div className="relative sm:rounded-lg"><span><h2 className="  text-3xl font-extrabold m-3">After Rescue/Post Retrieval</h2></span> </div>
            
              <img
                 src={ImageRecuedBat} 
                 alt="" 
                 className="flex-shrink-0  max-w-xs mx-auto rounded-lg" />

              <ol className=" text-md font-semibold max-w-md space-y-1 list-decimal list-inside  p-4 pl-4 ">

                <li>Wrap in Bat Wrap </li>
                <li>Dry Glucose = Place a large pinch of glucose powder & put in mouth</li>
                <li>Warm pup for 5-10 minutes (depending on weather*)– place in basket with heat pad or under jacket against your body
                  <ul>*NB if Temperature on the day is above 27 degrees Celsius DO NOT PLACE ON
                    ARTIFICIAL HEAT</ul>
                </li>
                <li>DO NOT GIVE FLUIDS UNTIL WARM</li>
                <li>Once warm (IF EXPERIENCED CARER/RESCUER) gently provide glucose water –STOP if bat is not lapping </li>
                <li>Place dummy in mouth</li>
              </ol>




          </div>
    






      </section>

    </>
  )
}
