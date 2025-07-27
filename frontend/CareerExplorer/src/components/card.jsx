import React from 'react'
import './card.css'

import { useState } from 'react';


const card = (dataName) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ['Travelling', 'Yoga', 'Gaming', 'Sports'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <>
            <div className="card flex flex-wrap items-center justify-center h-40" data-aos="fade-up" data-aos-delay="200">
                <div className="dropdown">
                    <button className="dropdown-toggle border-2 rounded-md text-black px-3" onClick={toggleDropdown}>
                        {selectedOption || `Select ${dataName.dataName}`}
                    </button>

                    {isOpen && (
                        <ul className="dropdown-menu bg-white text-black">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                    className="dropdown-item text-center hover:bg-gray-100 cursor-pointer p-2"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}


export default card