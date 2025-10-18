'use client'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';




export const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleItem = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            {isOpen && (

                <div id="popup-modal" tabIndex={-1} className="  backdrop-blur-2xl   overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
                    <div className="relative p-2 pt-10 w-full  max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">

                            <div className="p-4 md:p-5 text-center">
                                <FontAwesomeIcon icon={faCircleExclamation} className="w-20 h-20 text-red-600 " size="4x" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 ">Are you vaccinated and trained for bat rescues?</h3>
                                <button onClick={toggleItem} data-modal-hide="popup-modal" type="button" className="text-white bg-green-600 text-lg font-medium rounded-lg text-md inline-flex items-center px-5 py-2.5 text-center">
                                    Yes, I am.
                                </button>
                                <a href="/" data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200    ">
                                    No, I&apos;m Not</a>
                                <p className=" mt-8 text-lg font-normal text-gray-500 ">
                                    Vaccinated Rescuers:
                                </p>
                                <p className="mb-5 text-sm font-normal text-gray-500 ">
                                    Being vaxxed doesn&apos;t always mean you should rescue. Min 24hr monitoring should occur before intervention for Non-Urgent cases
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )

};