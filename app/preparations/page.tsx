import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'

const ImagePersonHiking = '/images/person-hiking-solid_wpath_outline.svg';




export default function Page() {
  return (
    <>
      

      
      <Pagetitle>Preparations</Pagetitle>


        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-8 mb-2">
              <div className="relative overflow-x-auto sm:rounded-lg">
                
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      
                  <tbody>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200  ">
                      <td className="pl-6">
                        <svg className="w-18 h-18 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
      
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        <h1 className="font-semibold text-2xl ">Pair Up</h1>
                        <p>Go in Pairs or let someone know you are going to check camp.</p>
                      </td>
                    </tr>
      
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">
                      <td className="pl-6">
                        <svg className="w-18 h-18  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14" />
                  </svg>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        <h6 className="font-semibold text-2xl ">Be Quiet</h6>
                        <p>Please be quiet and walk slowly through camp.</p>
                   
                        
                      </td>
                    </tr>
      
                    <tr className=" dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">
                      <td className="pl-6">
                        <img
                     src={ImagePersonHiking} 
                     className="w-18 h-18S md:w-15 max-w-full max-h-full" 
                     alt="Person Hiking" />
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        <h6 className="font-semibold text-2xl ">Walk On Path</h6>
                        ALWAYS stay on path - please do not go under the camp of bats.
                      </td>
                    </tr>
      
                  </tbody>
                </table>
              </div>
            </div>







<div className="w-full p-4 mb-4 border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 bg-yellow-200">
      <div className="grid  gap-8 ">
            <table className="w-full text-sm  dark:text-gray-400">
              <tr className="dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
              <td className="p-2">
                  <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </td>
                <td className="px-2 py-2 text-gray-900 dark:text-white">
                  <h3 className="text-gray-900 dark:text-white text-xl font-extrabold ">Human Emergency</h3>
                  <h1 className="font-semibold">Emergency ID: YBP207</h1>
                  <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services (000)</p>
                </td>
              </tr>
            </table>
        </div>
        </div>
        
        
<div className="w-full p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-3 m-3">Equipment </h2></span>


      <div className="grid  gap-8">


        <div className=" dark:bg-gray-800  rounded-lg p-2 content-center md:p-10">

          <tbody>
        
              <tr>
                <td className="">
                  <h2 className="text-gray-900 dark:text-white text-xl font-bold  "> Observing</h2>
                  <ul className="list-disc p-3">
                    <li>Binoculars</li>
                    <li>Water</li>
                    <li>Sun Protection</li>
                    <li>Aerogard</li>
                    <li>Gloves</li>
                    <li> First Aid Kit (inc. Snake Kit, hand sanitizer)</li>
                    <li>Long Socks, long pants, protective shoes</li>
                  </ul>
                </td>

                <td className="border-s ps-5 border-gray-300">

                  <h2 className="text-gray-900 dark:text-white text-xl font-bold"> Rescuing</h2>
                  <ul className="list-disc p-3">

                    <li>Water - preboiled preferred</li>
                    <li>Bat wraps</li>
                    <li>Syringes</li>
                    <li>Dummies/teats</li>
                    <li>Glucose (glucodin powder)</li>
                    <li>Basket & handwarmers</li>
                    <li>Identification</li>
                  </ul>
                </td>
              </tr>
    
          </tbody>
        </div>
        </div>
        

       </div> 

      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mt-5 ms-3">Guidelines </h2></span>

      <table>
        <tbody>

          <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">

            <td className="px-6 py-4 text-gray-900 dark:text-white">

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

