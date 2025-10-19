import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import { faPersonHiking, faTruckMedical, faUserGroup, faVolumeMute} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Page() {
  return (
    <>
      

      
      <Pagetitle>Preparations</Pagetitle>


        <div className="  rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right ">
      
                  <tbody>
                    <tr className="  border-gray-900  ">
                      <td className="pl-6">
                        <FontAwesomeIcon icon={faUserGroup} className=" " size="4x" />     
                      </td>
                      <td className="px-6 py-4  ">
                        <h1 className="font-semibold text-2xl ">Pair Up</h1>
                        <p>Go in Pairs or let someone know you are going to check camp.</p>
                      </td>
                    </tr>
      
                    <tr className=" border-gray-900 ">
                      <td className="pl-6">
                        <FontAwesomeIcon icon={faVolumeMute} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Be Quiet</h6>
                        <p>Please be quiet and walk slowly through camp.</p>
                   
                      </td>
                    </tr>
      
                    <tr className="   border-gray-900 ">
                      <td className="pl-6">
                                               <FontAwesomeIcon icon={faPersonHiking} className="" size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Walk On Path</h6>
                        ALWAYS stay on path - please do not go under the camp of bats.
                      </td>
                    </tr>
      
                  </tbody>
                </table>
              </div>
            </div>







<div className="w-full p-4 mb-2   sm:p-6   bg-yellow-200">
      <div className="grid  gap-8 ">
            <table className="w-full text-sm  ">
              <tr className="">
              <td className="p-2">
                 <FontAwesomeIcon icon={faTruckMedical} className=" " size="4x" />
                </td>
                <td className="px-2 py-2  ">
                  <h3 className="  text-xl font-extrabold ">Human Emergency</h3>
                  <h1 className="font-semibold">Emergency ID: YBP207</h1>
                  <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services (000)</p>
                </td>
              </tr>
            </table>
        </div>
        </div>
        
        
      <div className="w-full p-3 mb-2 rounded-lg  sm:p-6  ">
      <span><h2 className="  text-3xl font-extrabold mb-3 ">Equipment </h2></span>
      <div className="grid  gap-8 grid-cols-1 md:grid-cols-2">

        <div className="col-span-1 pl-3">
          <h2 className=" text-xl font-bold"> Observing</h2>
          <ul className="list-disc p-3">
            <li>Binoculars</li>
            <li>Water</li>
            <li>Sun Protection</li>
            <li>Aerogard</li>
            <li>Gloves</li>
            <li> First Aid Kit (inc. Snake Kit, hand sanitizer)</li>
            <li>Long Socks, long pants, protective shoes</li>
          </ul>
        </div>

        <div className="col-span-1 pl-3">
          <h2 className=" text-xl font-bold"> Rescuing</h2>
          <ul className="list-disc p-3">
            <li>Water - preboiled preferred</li>
            <li>Bat wraps</li>
            <li>Syringes</li>
            <li>Dummies/teats</li>
            <li>Glucose (glucodin powder)</li>
            <li>Basket & handwarmers</li>
            <li>Identification</li>
          </ul>
        </div>
        </div>
        </div>
        
      <span><h2 className=" text-3xl font-extrabold mt-5 ms-3">Guidelines </h2></span>

      <table>
        <tbody>

          <tr className="    ">

            <td className="px-6 py-4  ">

                <ul className="list-disc">
                  <li><p className="text-red-500 font-bold underline" >ALL RESCUERS MUST BE VACCINATED </p></li>
                <li>Do not attempt retrieval without second opinion from experienced carers or rescuers.</li>
                <li>Retrieving pups needs to be done as quietly as possible without disrupting the camp.</li>
                <li>Tree climbers will only be used for pups outside of the camp.</li>
                <li>Rescuers with 10M+ poles must be experienced or trained before attempting pole rescue.</li>
                <li>All pups rescued(?) must be reported to group chat, Tamsyn, Emma H or Megan.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>






    </>
  )
}

