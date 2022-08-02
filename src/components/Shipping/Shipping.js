import React from 'react';

const Shipping = () => {



    return (


        <div>
            <div className=''>


                <div className='ml-4 p-4 ' >
                    <h1 className='font-bold text-2xl text-gray-600 '>Shipping & Payment</h1>
                </div>



                <div class="flex justify-start gap-3 ml-4 p-4">
                    <button class="inline-flex rounded text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600  text-lg">LOG IN</button>
                    <button class="inline-flex text-black bg-white py-2 px-6 focus:outline-none rounded text-lg border-gray-400 border-1">SIGN UP</button>
                </div>
                <div className='ml-4 p-4' >
                    <h1 className='font-bold text-lg text-gray-600 '>Shipping Information</h1>
                </div>


                <div className='ml-4 pl-4 grid grid-cols-2 gap-3 justify-center items-center' >
                    <input type="text" placeholder="Email" class="input w-full  max-w-xs" />
                    <input type="text" placeholder="Address" class="input w-full max-w-xs" /> <input type="text" placeholder="First Name" class="input w-full max-w-xs" /> <input type="text" placeholder="City" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" class="input w-full max-w-xs" />

                    <input type="text" placeholder="Postal Code/ZIP" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Phone Number" class="input w-full max-w-xs" />
                    <select class="select w-full max-w-xs">
                        <option>Poland</option>
                        <option>Bangladesh</option>
                        <option>USA</option>
                        <option>China</option>
                    </select>
                </div>


            </div>

            <br />
        </div>
    );
};

export default Shipping;



