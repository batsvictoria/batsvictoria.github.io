import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "contact",
};

import Pagetitle from '@/components/pagetitle'

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
                      <svg className="w-[39px] h-[39px] text-orange-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Freeway Bridge</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
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
                      <svg className="w-[39px] h-[39px] text-orange-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Freeway Bridge</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Fairfield Side</div>
                    </th>

                  </tr>


                </tbody>
              </table>
            </div>










      





    </>
  )
}
