import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import { faCamera, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <>



      <Pagetitle>How to Report Non-Urgent/Dead Bats</Pagetitle>


    

      

        <div className="  rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right  ">
      
                  <tbody>
                    <tr className=" ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faCamera} className=" " size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 ">
                        <h1 className="font-semibold text-2xl ">1. Take a Photo.</h1>
           
          
                  <ul className="pl-5 list-disc">

                    <li>Please take a picture of the bat zoomed <u>in</u> with your camera</li>
                    <li>Please take a picture of the bat zoomed <u>out</u> and please mark thebat in this picture – We are looking for clear markers(trees/logs/rocks)</li>
                    <li>Mark spot if possible (Use ribbon, sticks, rocks etc.)</li>
                  </ul>
                      </td>
                    </tr>
      
                    <tr className="    ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faLocationDot} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
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
