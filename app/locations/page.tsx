import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "locations",
  description: "location terminology",
  metadataBase: new URL('https://batsvictoria.github.io/locations'),
  
};

import Pagetitle from '@/components/pagetitle'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageStaticMap = '/images/yb_map_bats.svg'


export default function Page() {
  return (
    <>

      <Pagetitle>Locations</Pagetitle>


      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mb-2">
 
       
          

<div className="relative sm:rounded-lg"><span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold m-3">Interactive Map</h2></span> </div>
            

              <iframe src="https://www.google.com.au/maps/d/u/0/embed?mid=1W0OACpLC-KvnQI4EfaITIMKsQSgFwW0&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>



              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-800 whitespace-nowrap dark:text-white">
                      <FontAwesomeIcon icon={faLocationDot} className="text-orange-600 dark:text-white" size="3x" />


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Freeway Bridge</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <FontAwesomeIcon icon={faLocationDot} className="text-green-800 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Fairfield Side</div>
                    </th>

                  </tr>


                </tbody>
              </table>
            </div>


 
     
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mb-2">
 

<div className="relative sm:rounded-lg"><span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold m-3">Static Map</h2></span> </div>
              <img
                 src={ImageStaticMap}
                 alt=""
                 className="flex-shrink-0" />

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-800 whitespace-nowrap dark:text-white">
                    <FontAwesomeIcon icon={faLocationDot} className="text-orange-600 dark:text-white" size="3x" />


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Freeway Bridge</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                       <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                     <FontAwesomeIcon icon={faLocationDot} className="text-green-800 dark:text-white" size="3x" />
                      <div className="text-sm font-semibold">Fairfield Side</div>
                    </th>

                  </tr>


                </tbody>
              </table>
            </div>










      





    </>
  )
}
