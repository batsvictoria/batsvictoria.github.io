import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'
import { faCamera, faClock, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <>



      <Pagetitle>How to Report</Pagetitle>
<h6 className="pl-3 text-md ">As it will often be a different person rescuing or checking the bat, please provide as much information as you can.</h6>
 


        <div className="  rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right  ">
      
            <tbody>
              
               <tr className="    ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faLocationDot} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Record Location</h6>
                        <p>Pin drop the location on either</p>
                    
                    <ul className="list-disc pl-5">
                      <li>Google Maps</li>
                      <li>What 3 Words</li>
                    </ul>
                  
                        
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faClock} className=" " size="4x" />

      
                      </td>
                      <td className="px-6 py-4 text-gray-900 ">
                        <h1 className="font-semibold text-2xl ">Note Time Spotted</h1>
           
          
           
                      </td>
                    </tr>
      
                    <tr className="    ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faCamera} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Take Photos and Video</h6>
           
                    
                    <ul className="list-decimal pl-5">
                      <li>Photo of pup in the tree, pup circled.</li>
                      <li>Photo of full tree, pup circled.</li>
                      <li>Video showing pup in tree then path in both directions and any identifying markers (trees, rocks etc.)</li>
                    </ul>
                  
                        
                      </td>
              </tr>

                   <tr className="    ">
                      <td className="pl-6">
                    <FontAwesomeIcon icon={faPaperPlane} className=" " size="4x" />
                      </td>
                      <td className="px-6 py-4  ">
                        <h6 className="font-semibold text-2xl ">Send</h6>
           
                    
                    <ul className="list-disc pl-5">
                      <li>Share with the appropriate Bat Monitoring group chat on What's App</li>
                      
                    </ul>
                  
                        
                      </td>
              </tr>
             
             
      
               
      
                  </tbody>
                </table>


                


  <h2 className="text-gray-900  text-xl font-extrabold mb-2 m-3">Examples of Pics/Videos Required</h2>
          

<div className="grid grid-cols-2 md:grid-cols-2 gap-2">
    <div className="grid gap-2">
        <div>
            <img className="h-auto max-w-full rounded-base" src="/images/circle_image.jpeg" alt=""/>
            <p className="text-sm">1. Photo of pup in the tree, pup circled</p>
       </div>
        <video className="w-full rounded-base" controls>
           <source src="/images/report_video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
       <p className="text-sm">3. Video showing pup in tree then path in both directions and any identifying markers (trees, rocks etc)</p>
    </div>
    <div className="grid gap-2">
        <div>
                <img className="h-auto max-w-full rounded-base" src="/images/full_tree_circle.jpeg" alt="" />
                <p className="text-sm">2. Photo full tree, pup circled</p>
        </div>
  
    </div>

          </div>
          
          






     

           
              </div>
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
