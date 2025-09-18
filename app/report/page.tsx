import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'

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
                    <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

      
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
                     <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                  </svg>
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
