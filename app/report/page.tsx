import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import { faCamera, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <>



      <Pagetitle>How to Report Non-Urgent/Dead Bats</Pagetitle>


    

      

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      
                  <tbody>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200  ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faCamera} className="text-black dark:text-white" size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        <h1 className="font-semibold text-2xl ">1. Take a Photo.</h1>
           
          
                  <ul className="pl-5 list-disc">

                    <li>Please take a picture of the bat zoomed <u>in</u> with your camera</li>
                    <li>Please take a picture of the bat zoomed <u>out</u> and please mark thebat in this picture – We are looking for clear markers(trees/logs/rocks)</li>
                    <li>Mark spot if possible (Use ribbon, sticks, rocks etc.)</li>
                  </ul>
                      </td>
                    </tr>
      
                    <tr className=" dark:bg-gray-800 dark:border-gray-700  ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faLocationDot} className="text-black dark:text-white" size="4x" />
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        <h6 className="font-semibold text-2xl ">2. Record the Location</h6>
                        <p>Pin drop the location</p>
                    
                    <ul className="list-disc pl-5">
                      <li>Google Maps</li>
                      <li> Avenza </li>
                      <li>What 3 Words</li>
                    </ul>
                  
                        
                      </td>
                    </tr>
      
               
      
                  </tbody>
                </table>
              </div>
            </div>






















    </>
  )
}
