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

const LocationPin = ({name, color }: { name: string, color: string }) => {
  return (
    <>
      <div className="col-span-1 grid grid-cols-4   align-top">
          <FontAwesomeIcon icon={faLocationDot} size="2x" className={color} />
          <span className="text-sm font-semibold col-span-3">
            {name}
          </span>
      </div>
    </>
  )
}



export default function Page() {
  return (
    <>

      <Pagetitle>Locations</Pagetitle>
      <div className="w-full p-4   rounded-lg  sm:p-6   mb-2">

        <Pagetitle>Interactive Map</Pagetitle>
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="col-span-full">
            <iframe 
              src="https://www.google.com.au/maps/d/u/0/embed?mid=1W0OACpLC-KvnQI4EfaITIMKsQSgFwW0&ehbc=2E312F&noprof=1"
              width="100%"
              height="480"
            ></iframe>
          </div>
          <LocationPin name="T Intersection" color="text-orange-600" />
          <LocationPin name="Fairfield Side" color="text-green-800" />
          <LocationPin name="Freeway Bridge" color="text-blue-600" />
          <LocationPin name="Kew Side"       color="text-yellow-500" />
          </div>
      </div>
      
              <div className="w-full p-4 rounded-lg sm:p-6   mb-2">
        <Pagetitle>Avoid Walking On The Fire Track</Pagetitle>
        <p>Please note: The bats along the fire track are more sensitive than those on the paths. Experienced volunteers in this area only or unless you have been directed. There are signs in this area as a reminder. </p>
      
   
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <div className="col-span-full">
              <img
                src="images/heat_map_yb.svg"
                alt=""
                className="flex-shrink-0" />
            </div>
         
          </div>
        </div>
     
        <div className="w-full p-4 rounded-lg sm:p-6   mb-2">
          <Pagetitle>Static Map</Pagetitle>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <div className="col-span-full">
              <img
                src={ImageStaticMap}
                alt=""
                className="flex-shrink-0" />
            </div>
            <LocationPin name="T Intersection" color="text-orange-600" />
            <LocationPin name="Fairfield Side" color="text-green-800" />
            <LocationPin name="Freeway Bridge" color="text-blue-600" />
            <LocationPin name="Kew Side"       color="text-yellow-500" />
          </div>
        </div>
        
    </>
  )
}
