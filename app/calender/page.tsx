import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

export default function Page() {
  return (
    <>


      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Bat Calendar</h2></span>


      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mb-2">


          <tbody>
            <tr>
              <td className=" p-2">
                <div className=" flex justify-center items-center">
                  <FontAwesomeIcon icon={faSun} className="text-black dark:text-white" size="3x" />
                </div>

                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-center"> Morning</h2>
                <p className="text-center text-sm">Pups maybe playing and fall. Please observe before rescue</p>
              </td>

              <td className="ps-4 border-gray-400 text-centre">
                <div className=" flex justify-center items-center">
                   <FontAwesomeIcon icon={faMoon} className="text-black dark:text-white" size="3x" />
                </div>


                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-center"> Evening</h2>
                <p className="text-center text-sm">Mums will crèche pups, please don’t remove without advice</p>
              </td>
            </tr>
          </tbody>




        </div>
     


      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg border-gray-200 border rounded-lg bg-white">

            <span><h2 className="text-gray-900  text-3xl font-extrabold mb-2 m-3">Pup Season</h2></span>
        <table className="w-full text-sm text-left  dark:text-blue-100">
          <tbody className=" text-white dark:text-white">
            <tr className="text-center align-top">
              <th scope="col" className="px-4 py-1  dark:text-white  ">
                <h4 className="text-xl text-black" > Oct-Nov</h4>
                <p className="text-gray-500 text-sm">Pups should be on mum for the 1st 4 weeks of their life.</p>
              </th>
              <th scope="col" className=" border-s ps-4 border-gray-400 px-4 py-1  dark:text-white">
                <h4 className="text-xl text-black"> Nov-Dec</h4>
                <p className="text-gray-500 text-sm">Mums will leave their babies in the tree for a break</p>
              </th>
              <th scope="col" className=" border-s ps-4 border-gray-400 px-4 py-1  dark:text-white">
                <h4 className="text-xl text-black"> Jan-Feb</h4>
                <p className="text-gray-500 text-sm">Pups are learning to fly and will fly if approached.</p>
              </th>

            </tr>

            <tr className="bg-red-600 border-b text-center ">
              <td colSpan={3} className="text-lg font-bold">CRITICAL</td>
            </tr>

            <tr className="bg-red-300 text-black border-b align-top ">

              <td className=" list-disc px-4 py-1 text-sm">
                <td>
                  <li>Small pup (size of hand) on ground.</li>
                  <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                </td>
              </td>
              <td className="list-disc border-s ps-4 px-4 py-1 border-gray-400 text-sm">
                <td>
                  <li>Pup on ground.</li>
                  <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                </td>
              </td>
              <td className="list-disc border-s ps-4 px-4 py-1 border-gray-400 text-sm">

                <li>Pup on ground. </li>
                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

              </td>

            </tr>



            <tr className="bg-orange-600 border-b text-center">
              <td colSpan={3} className="text-lg font-bold">URGENT</td>
            </tr>

            <tr className="bg-orange-300 text-black border-b align-top ">

              <td className="px-4 py-1 text-sm">

                <li>Pup alone, vocalising, no adults around.</li>
              </td>

              <td className="px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                <ul className="list-disc">
                  <li>Pup alone, vocalizing, no adults around.</li>
                  <li> Condition check:</li>
                  <ul>
                    <li>Is their call hoarse?</li>
                    <li>Are they skinny?</li>
                    <li>Eyes bright?</li>
                    <li>How big are they?</li>
                  </ul>
                </ul>
              </td>
              <td className="px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                <ul className="list-disc ">
                  <li>Pup will be learning to fly</li>
                  <ul>
                    <li>Is their call hoarse?</li>
                    <li>How are they moving?</li>
                    <li>Any Injuries?</li>
                  </ul>
                </ul>
              </td>

            </tr>

            <tr className="bg-green-600 border-b text-center">
              <td colSpan={3} className="text-lg font-bold">NON-URGENT</td>
            </tr>

            <tr className="bg-green-200 text-black border-b align-top ">

              <td className=" list-disc px-4 py-1 text-sm">
                <td>
                  <li>Small pup (size of hand) on ground.</li>
                  <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                </td>
              </td>
              <td className="list-disc px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                <td>
                  <li>Pup on ground.</li>
                  <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                </td>
              </td>
              <td className="list-disc px-4 py-1 border-s ps-3 border-gray-400 text-sm">

                <li>Pup on ground. </li>
                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

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
