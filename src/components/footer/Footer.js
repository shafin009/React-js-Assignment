import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {



    return (
        <div>
            <br />
            <br />
            <div className='  px-12 py-8 flex justify-center md:justify-between'>
                <div className='hidden md:block '>

                    <button class="flex title-font justify-center font-medium items-center text-gray-900 mb-8 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <h2 class="ml-3 text-xl  text-black">back </h2>
                    </button>
                </div>


                <div className='flex gap-3 text-xl'>
                    <div class="flex justify-end gap-3">

                        <button class="inline-flex text-black bg-white py-2 px-6 focus:outline-none rounded text-lg border-gray-400 border-1">CONTINUE SHOPPING</button>
                        <button class="inline-flex rounded text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600  text-lg">PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Footer;