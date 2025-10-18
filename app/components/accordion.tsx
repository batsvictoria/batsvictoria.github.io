import React, { useState } from 'react';
import type { ReactNode } from "react";

export const Accordion = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white  text-gray-900 " data-inactive-classes="text-gray-500 ">
                {children}
            </div>
        </>
    )
};


export const AccordionItem = ({ title, children }: { title: string, children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleItem = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <h2 id="accordion-flush-heading-1" onClick={toggleItem}>
                <button type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200   gap-3"
                    onClick={toggleItem}
                >
                    <span><h2 className="text-gray-900  text-3xl font-extrabold mb-2">{title}</h2></span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>

            {isOpen && (
                <div className="py-5 border-b border-gray-200 ">
                    <p className="mb-2 text-gray-500 ">{children}</p>
                </div>
            )}
        </>
    )

};
