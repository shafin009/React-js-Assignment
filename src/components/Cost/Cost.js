import React from 'react';

const Cost = () => {


    return (
        <>
            <br />
            <br />

            <div className='pb-40'>

                <div className='flex justify-end gap-3 mr-6'>

                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-20 h-10 w-10 text-black p-2 bg-white border-blue-500 border-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-0 h-10 w-10 text-white p-2 bg-green-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>

                </div>

                <div class="flex justify-start gap-3 ml-4 p-4">
                    <h1 className=' text-xl text-gray-600 '>Your Cart</h1>
                </div>



                <div className='grid grid-rows-2 gap-2 ml-4 ' >

                    <div className='container grid grid-cols-3 gap-2  justify-center items-center '>

                        <div class="avatar ml-3 p-3">
                            <div class="w-8 rounded">
                                <img src="https://img.freepik.com/free-photo/fit-sexy-young-black-man-with-afro-wearing-clean-unlabeled-white-t-shirt_346278-996.jpg?w=2000" alt="" />
                            </div>
                        </div>


                        <div class="text-sm">

                            <h1>T-Shirt</h1>
                            <h1>Summer Vibes</h1>
                            <p className='pt-2 text-gray-400'>#261311</p>

                        </div>



                        <div class="text-lg">

                            <h1 className='pb-3'>$89.99</h1>

                        </div>

                    </div>


                    <div className='container grid grid-cols-3 gap-2  justify-center items-center pt-2'>

                        <div class="avatar ml-3 p-3">
                            <div class="w-8 rounded">
                                <img src='https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
                            </div>
                        </div>


                        <div class="text-sm">

                            <h1>Basic Slim</h1>
                            <h1>Fit T-Shirt </h1>
                            <p className='pt-2 text-gray-400'>#212315</p>

                        </div>



                        <div class="text-lg">

                            <h1 className='pb-3'>$69.99</h1>

                        </div>

                    </div>

                    <button class="flex mx-auto text-black mt-4 bg-gray-200 border-1 py-2 px-8 focus:outline-none  rounded text-lg">Total Cost  $159.98</button>


                </div>


                <div className='mt-10'>


                    <div class="flex title-font font-medium items-center justify-center text-gray-900 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                        <h2 class="ml-3 text-xs text-black">You are $30.02 away <br /> from free shipping!</h2>
                    </div>


                </div>



            </div>
        </>
    );
};

export default Cost;