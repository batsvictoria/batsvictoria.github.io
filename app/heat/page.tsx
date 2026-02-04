import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import {  faAnglesDown, faBan, faCamera, faFan, faPaperPlane, faPersonWalking, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <>



      <Pagetitle>Heat Events</Pagetitle>
<h6 className="pl-3 text-md ">Heat Events occur when the temps exceed 38&deg;C or when we have back to back days of heat and can be catastrophic to our colonys. Each colony will be slightly different, but here are some general guidelines to follow through these days.</h6>
 
      <h2 className="text-gray-900  text-2xl font-extrabold m-3">During Hot days, bats will:</h2>
   
          

        <div className="  rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right  ">
      
            <tbody>
              
               <tr className="    ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faAnglesDown} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Go Low</h6>
                        <p>Bats will move lower to get cooler.</p>
                    
               
                  
                        
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faFan} className=" " size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 ">
                        <h1 className="font-semibold text-2xl ">Fan</h1>
                     <p>Bats will flap their wings to keep themselves cool.</p>
          
           
                      </td>
                    </tr>
      
                  <tr className=" ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faWind} className=" " size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 ">
                        <h1 className="font-semibold text-2xl ">Pant</h1>
                     <p>Just like a dog, they will open their mouth and pant.</p>
          
           
                      </td>
                    </tr>
             
             
      
               
      
            </tbody>
            
                </table>



        </div>
        </div>
 
       <div className="bg-red-300 text-gray-200   md:p-6 mb-2 px-2 py-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right ">
      
                  <tr className="  ">
                    <td className="p-4">
                      <FontAwesomeIcon icon={faBan} className="w-20 h-20  " size="4x" />
                    </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Please do not walk through camp during heat events.</h6>
                  <p>Avoid walking camp unless given permission by colony manager.</p>
                  <p>Walking through the colony while the bats are low will create extra stress and can lead to mass death.</p>
                    
               
                  
                        
                      </td>
                  </tr>
      
                </table>
              </div>
      </div>

       <h2 className="text-gray-900  text-xl font-bold py-4 m-3 ">If you are asked to monitor the colony:</h2>

      <h2 className="text-gray-900  text-2xl font-extrabold py-4 m-3 ">No Walk Zones</h2>
      <p className="mb-4 m-3">Please note: every colony is different, even parts within a colony will have different procedures as the bats will react differently. Please reach out if you have any questions.</p>
      <h2 className="text-gray-900  text-xl font-bold m-3 ">Yarra Bend Behaviours</h2>
      

      <ul className="list-disc p-3 m-3">
            <li>Avoid walking through camp if the temperature is over 27&deg;C</li>
            <li>The bats at Kew are more sensitive to the heat earlier than the bats in Fairfield. </li>
            <li> Please avoid walking this fire track - marked in red - unless you are asked to.</li>
      
          </ul>

      
      <div className="w-full rounded-lg    mb-2">
                
                <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                  <div className="col-span-full">
                    <img
                      src="/images/heat_map_yb.svg"
                      alt=""
                      className="flex-shrink-0" />
                  </div>
             
         
                </div>
              </div>

      <h2 className="text-gray-900  text-2xl font-extrabold py-4 m-3">Signs of Critical Distress</h2>
  
                  <p className="m-3">When monitoring colony's through heat events, these are alerting behaviours that need to be reported.</p>
      <p className="py-4 m-3 font-semibold text-center">The stages of colony collapse:<br></br>Clustering &gt; Clumping &gt; Collapse</p>
          


   
        <div >
            <img className="h-auto max-w-full rounded-base" src="/images/clump.jpg" alt=""/>
            <h2 className="text-gray-900  text-xl font-extrabold m-3">1. Clustering.</h2>
            <p className="text-sm  m-3 mb-4">Bats will start huddling together on tree branches.</p>
      </div>
    
        <div>
                <img className="h-auto max-w-full rounded-base" src="/images/cluster.jpg" alt="" />
                <h2 className="text-gray-900  text-xl font-extrabold m-3 "> 2. Clumping.</h2>
            <p className="text-sm mb-4 m-3">Bats will start stacking on top of one another, often on the trunk of a tree. They will slowly move down the tree.</p>
        </div>
  
  <div>
        <img className="h-auto max-w-full rounded-base" src="/images/collapse.jpg" alt=""/>
          <h2 className="text-gray-900  text-xl font-extrabold m-3 ">3. Collapse.</h2>
            <p className="text-sm mb-4 m-3">Bats will move lower and lower, stacked like bananas down tree trunks until the reach the ground and collapse. Some fall due to death, however, there is often a combination of alive and dead bats in the mix.</p>
 
   </div>

           <div className="col-span-1 pl-3">
          <h2 className=" text-xl font-bold"> Notes When Rescuing during heat events</h2>
          <ul className="list-disc p-3">
            <li>Avoid wrapping adults as they will over heat, just allow them to rest on top of towels in carrier.</li>
            <li>Loosely wrap pups and avoid over crowding carrier.</li>
            
          </ul>
        </div>
          






     


    
    {/* 

        <h2 className="text-gray-900  text-3xl font-extrabold mb-2 m-3">Non-Urgent/Dead Bats </h2>


        <div className="  rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right  ">
      
                  <tbody>
                    <tr className=" ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faCamera} className=" " size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 ">
                        <h1 className="font-semibold text-2xl ">Take a Photo</h1>
           
          
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
                      <li>What 3 Words</li>
                    </ul>
                  
                        
                      </td>
                    </tr>
      
               
      
                  </tbody>
          </table>
          
          
              </div>
            </div>








*/}













    </>
  )
}
