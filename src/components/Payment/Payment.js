import React from 'react';

const Payment = () => {


    return (
        <div>

            <div className=''>

                <br />
                <br />
                <br />



                <div class="flex justify-start gap-3 ml-4 p-4">
                    <h1 className=' text-xl text-gray-600 '>Payment method</h1>
                </div>



                <div className='ml-4 pl-4 grid grid-cols-3 gap-3 justify-center items-center' >

                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png" className='w-80 h-11' alt="" />
                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className='w-80 h-11' alt="" />
                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" className='w-80' alt="" />
                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://w7.pngwing.com/pngs/656/817/png-transparent-mastercard-maestro-credit-card-debit-card-payment-mastercard-blue-text-logo.png" className='w-80' alt="" />
                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png" className='w-80 h-11' alt="" />
                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-3'>
                        <img src="https://www.ideal.nl/img/logo/ideal-logo-1024.png" className='h-11 w-80' alt="" />
                    </div>

                </div>


                <div class="flex justify-start gap-3 ml-4 p-6">
                    <h1 className=' text-xl text-gray-600 '>Delivery method</h1>
                </div>


                <div className='ml-4 pl-4 grid grid-cols-2 gap-3 justify-center items-center' >

                    <div class='border-gray-500 rounded border-1 bg-white p-4 grid grid-cols-2 gap-3 justify-center items-center '>


                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/InPost_logo.svg/1200px-InPost_logo.svg.png" className='w-full h-25' alt="" />
                        </div>


                        <div className='ml-1 text-xs'>
                            <p>$20.00</p>
                        </div>

                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-4 grid grid-cols-2 gap-3 justify-center items-center '>


                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png" className='w-full h-25' alt="" />
                        </div>


                        <div className='ml-1 text-xs'>
                            <p>$12.00</p>
                        </div>

                    </div>


                    <div class='border-gray-500 rounded border-1 bg-white p-4 grid grid-cols-2 gap-3 justify-center items-center '>


                        <div>
                            <img src="https://logos-world.net/wp-content/uploads/2020/08/DHL-Emblem.png" className='w-full h-25' alt="" />
                        </div>


                        <div className='ml-1 text-xs'>
                            <p>$15.00</p>
                        </div>

                    </div>



                    <div class='border-gray-500 rounded border-1 bg-white p-4 grid grid-cols-2 gap-3 justify-center items-center '>


                        <div>
                            <img src="https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png" className='w-full h-25' alt="" />
                        </div>


                        <div className='ml-1 text-xs'>
                            <p>$10.00</p>
                        </div>

                    </div>







                </div>

            </div>



        </div>
    );
};

export default Payment;