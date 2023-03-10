import React from 'react';
import image1 from '../../../Assetes/Images/ourservice1.png'
import image2 from '../../../Assetes/Images/ourservice2.png'
import image3 from '../../../Assetes/Images/ourservice3.png'
import image4 from '../../../Assetes/Images/ourservice4.png'

const Features = () => {
     return (
          <div className='bg-gray-100 py-16'>
               <div>
                    <h1 className='text-2xl font-bold text-center'>What makes us different</h1>
                    <p className='text-gray-400 text-center mt-1 text-base '>Discover our features</p>
               </div>

                
               {/* <!-- component --> */}
                


<section class="py-10">
 
  <div class="flex flex-wrap px-3 md:px-10 lg:px-16 ">
    <div class="w-full md:w-6/12 border-r-4 bg-white py-10 lg:w-3/12 lg:mb-0 mb-12  ">
      <div class="">
        <img alt="..." src={image1} class="  mx-auto "/>
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold text-blueGray-700">Exclusive Designs</h5>
          <p class="mt-1 text-sm text-blueGray-400  ">Choose from our huge <br /> collections</p>
          
        </div>
      </div>
    </div>

    <div class="w-full border-r-4 md:w-6/12 bg-white py-10 lg:w-3/12 lg:mb-0 mb-12 ">
      <div class="">
        <img alt="..." src={image2} class="  mx-auto "/>
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold text-blueGray-700">Customer Care</h5>
          <p class="mt-1 text-sm text-blueGray-400 ">
          We are 24/7 open just to <br /> improve your lifestyle
          </p>
           
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12 bg-white border-r-4 py-10 lg:w-3/12 lg:mb-0 mb-12 ">
      <div class="">
        <img alt="..." src={image3} class="  mx-auto "/>
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold text-blueGray-700">Do Customization</h5>
          <p class="mt-1 text-sm text-blueGray-400  ">Customize your own furniture  according <br /> to your taste & budget</p>
          
        </div>
      </div>
    </div>


    <div class="w-full md:w-6/12 bg-white border-r-4 lg:border-none py-10 lg:w-3/12 lg:mb-0 mb-12 ">
      <div class="">
        <img alt="..." src={image4} class="   mx-auto "/>
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold text-blueGray-700">Quality & Brand Value</h5>
          <p class="mt-1 text-sm text-blueGray-400  ">Get the best quality & brand <br /> value of Partex Furniture</p>
           
        </div>
      </div>
    </div>
  </div>
</section>
 
 
               
 
          </div>
     );
};

export default Features;