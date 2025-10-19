import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

export default function Page() {
  return (
    <>


      <span><h2 className="  text-3xl font-extrabold mb-2 m-3">Bat Calendar</h2></span>


      <div className="w-full p-4  rounded-lg  sm:p-6   mb-2">


          <tbody>
            <tr>
              <td className=" p-2">
                <div className=" flex justify-center items-center">
                  <FontAwesomeIcon icon={faSun} className=" " size="3x" />
                </div>

                <h2 className="  text-2xl mb-2 text-center font-bold"> Morning</h2>
                <p className="text-center text-sm">Pups maybe playing and fall. Please observe before rescue</p>
              </td>

              <td className="p-2 border-gray-900 text-centre">
                <div className=" flex justify-center items-center">
                   <FontAwesomeIcon icon={faMoon} className=" " size="3x" />
                </div>


                <h2 className="0  text-2xl mb-2 text-center font-bold "> After 5pm</h2>
                <p className="text-center text-sm">Mums will crèche pups. please don’t remove without advice</p>
              </td>
            </tr>
          </tbody>




        </div>
     


      <div className="relative  overflow-x-auto  sm:rounded-lg  ">

            <span><h2 className="  text-3xl font-extrabold mb-2 m-3">Pup Season</h2></span>
        <table className="w-full text-sm  ">
          <tbody className=" text-gray-200 ">
            <tr className="text-center align-top">
              <th scope="col" className="px-4  py-1    ">
                <h4 className="text-xl text-gray-900" > Oct-Nov</h4>
                <p className="text-gray-900 text-sm">Pups should be on mum for the 1st 4 weeks of their life.</p>
              </th>
              <th scope="col" className=" border-s  border-gray-900 px-4 py-1  ">
                <h4 className="text-xl text-gray-900"> Nov-Dec</h4>
                <p className="text-gray-900 text-sm">Mums will leave their babies in the tree for a break</p>
              </th>
              <th scope="col" className=" border-s border-gray-900 px-4 py-1  ">
                <h4 className="text-xl text-gray-900"> Jan-Feb</h4>
                <p className="text-gray-900 text-sm">Pups are learning to fly and will fly if approached.</p>
              </th>

            </tr>

            <tr className="bg-red-500  text-center ">
              <td colSpan={3} className="text-lg font-bold">CRITICAL</td>
            </tr>
{/* Oct-Nov*/}
            <tr className="bg-red-200 text-gray-900  align-top ">

              <td className=" list-disc px-4 py-1 text-sm font-semibold">
                <td>
                  <li>Small pup (size of hand) on ground.</li>
                  <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                </td>
              </td>
              {/* Nov-Dec*/}
              <td className="list-disc border-s ps-4 px-4 py-1 border-gray-900 text-sm font-semibold">
                <td>
                  <li>Pup on ground.</li>
                  <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                </td>
              </td>
              {/* Jan-Feb*/}
              <td className="list-disc border-s ps-4 px-4 py-1 border-gray-900 text-sm font-semibold">

                <li>Pup on ground. </li>
                <li>Pup low in tree, vocalizing, no adults around, no adults responding, not able to fly.</li>

              </td>

            </tr>



            <tr className="bg-orange-500  text-center">
              <td colSpan={3} className="text-lg font-bold">URGENT</td>
            </tr>

              {/* Oct-Nov*/}
            <tr className="bg-orange-300 text-gray-900 border-b align-top font-semibold ">
              <td className="px-4 py-1 text-sm">

                <li>Pup alone and vocalizing, with NO ADULTS around.</li>
              </td>
{/* Nov-Dec*/}
              <td className=" border-s ps-4 px-4 py-1 border-gray-900 text-sm font-semibold">
                <ul className="list-disc">
                  <li>Pup alone in tree, vocalizing, no adults around, no adults responding.</li>
                  <li> Condition check is critical here, look for:</li>
                  <ul >
                    <li>- Is their call hoarse?</li>
                    <li>- Are they skinny?</li>
                    <li>- Eyes bright?</li>
                    <li>- How big are they?</li>
                  </ul>
                </ul>
              </td>
               {/* Jan-Feb*/}
              <td className=" border-s ps-4 px-4 py-1 border-gray-900 text-sm">
                <ul className="list-disc ">
                  <li>Pups will be alone in trees as they are learning to fly</li>
                  <li > Condition check is critical here, look for:</li>
                  <ul>
                    <li>- Is their call hoarse?</li>
                    <li>- How are they moving?</li>
                    <li>- Any Injuries?</li>
                  </ul>
                </ul>
              </td>

            </tr>

            <tr className="bg-blue-500  text-center">
              <td colSpan={3} className="text-lg font-bold">NON-URGENT</td>
            </tr>

            <tr className="bg-blue-300 text-gray-900 border-b align-top font-semibold">

              {/* Oct-Nov*/}
              <td className=" list-disc px-4 py-1 text-sm">
                <td>
                  <li>Pup alone, not vocalizing and adults near by.</li>
                  <li>Low in tree (mum may have accidentally dropped pup - monitor to make sure mum isn't trying to retrieve baby before intervention).</li>
                </td>
              </td>
               {/* Nov-Dec*/}
              <td className="list-disc px-4 py-1 border-s ps-4 border-gray-900 text-sm font-semibold">
                <td>
                  <li>Pup alone, not vocalizing and adults nearby</li>
                  
                </td>
              </td>
              {/* Jan-Feb*/}
              <td className="list-disc px-4 py-1 border-s ps-4 border-gray-900 text-sm font-semibold">
                <li>Pup alone, not vocalizing and adults near by </li>
             
                <li> <p className="font-bold underline text-red-500">Experienced rescuers only!</p>
                  You must approach with care, as pups will attempt to fly and can fly into the river!
                </li>

              </td>

            </tr>

          </tbody>
        </table>
      </div>

      <div>
        <p className="text-xs">Pups can be born anytime between Oct-Feb. </p>

        <p className="text-xs">This guide is based on general observations from past seasons.
        </p>
      </div>


    </>
  )
}
