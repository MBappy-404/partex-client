import React from 'react';

const Contact = () => {
     return (
          <div>
              
              {/* <!-- Container for demo purpose --> */}
<div class="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section class="mb-32 text-gray-800 text-center">
    {/* <style>
      .map-container {
        height: 700px;
        z-index: -1;
      }
    </style> */}
    <div class="">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="md:mt-12 lg:mt-0 mb-12  lg:mb-0">
            <div
              class="block rounded-lg shadow-lg px-6 py-12  md:px-12 lg:-mr-14"
              style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(1px)"}}>
            <h2 class="text-3xl font-bold mb-12">Contact us</h2>
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  checked
                />
                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87"
                  >Send me a copy of this message</label
                >
              </div>
              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <div class="map-container h-[700px] relative shadow-lg rounded-lg" style={{zIndex:'-1'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.9779896671566!2d88.5998012656783!3d24.372984016258822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefad023fd3b5%3A0x91e5843fe8317ba2!2sTheme%20Omor%20Plaza!5e1!3m2!1sen!2sbd!4v1671639280975!5m2!1sen!2sbd" class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border: "0px"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}

</div>
{/* <!-- Container for demo purpose --> */}

 

          </div>
     );
};

export default Contact;