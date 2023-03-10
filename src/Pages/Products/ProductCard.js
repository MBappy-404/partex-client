import React from 'react';

const ProductCard = ({ product }) => {

  const { name, logo, description, _id, condition, sell_price, original_price, seller_name, location,used } = product;
  console.log(product);
  return (
    <div>
      <div class="bg-grey-light py-8 w-full   flex  justify-center items-center">

        <div class="bg-gray-50 rounded   shadow hover:shadow-md duration-4">

          <div class="p-6 text-grey-darker text-justify flex flex-col">
            <img src={logo} alt="logo" class=" mb-6 h-80 object-cover" data-te-ripple-init data-te-ripple-color="light" />
            <p class="font-bold text-sm uppercase mb-2 text-blue-darker">{name}</p>
            <span class="text-grey-darker">
              {description.slice(0, 120)}...
            </span>
            <div class="mt-4   flex justify-between">
              <span class="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">{condition}</span>
              <p className=' text-sm font-bold mt-1'> Price: ${sell_price}</p>
              <span class="uppercase bg-yellow-dark text-grey-darkest font-bold p-2  text-xs shadow rounded">Add Wishlist</span>

            </div>
          </div>
          <div class="p-6 text-grey-darker text-justify flex flex-row justify-between border-t">

            {/* details modal button  */}
            <button
              type="button"
              class="inline-block hover:animate-pulse rounded bg-red-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-toggle="modal"
              data-te-target={`#myModal-${_id}`}
              data-te-ripple-init
              data-te-ripple-color="light">
              Details
            </button>



            {/* modal body  */}
            <div
              data-te-modal-init
              class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id={`myModal-${_id}`}
              tabindex="-1"
              aria-labelledby="exampleModalCenterTitle"
              aria-modal="true"
              role="dialog">
              <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                <div
                  class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                      class="text-xl font-medium leading-normal text-neutral-800"
                      id="exampleModalScrollableLabel">
                      Product Details
                    </h5>
                    <button
                      type="button"
                      class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="relative p-4">
                    <h1 className='text-gray-900 text-xl font-semibold py-2'>{name}</h1>
                    <p className='text-base text-gray-600'>{description}</p>
                    <br />
                    <div className='flex justify-between'>
                      <div>
                        {original_price ? <p className='font-semibold'>Original Price: ${original_price}</p> : ''}
                        <p className='font-semibold'> Sell Price: ${sell_price}</p>
                        {used ? <p className='font-semibold'>Used: {used}</p> : ''}
                      </div>
                      <div>
                        {seller_name ? <p className='font-semibold'>Seller name: {seller_name}</p> : ''}
                        {location ? <p className='font-semibold'>Seller Location: {location}</p> : ''}
                        
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="button"
                      class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="inline-block hover:animate-pulse rounded bg-red-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="button"
              data-te-toggle="modal"
              data-te-target={`#modalCart-${_id}`}
              data-te-ripple-init
              data-te-ripple-color="light"

            >
              <i class="fa fa-cart-plus mr-4" >
              </i>Add to cart</button>
              <div
              data-te-modal-init
              class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id={`modalCart-${_id}`}
              tabindex="-1"
              aria-labelledby="exampleModalCenterTitle"
              aria-modal="true"
              role="dialog">
              <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                <div
                  class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                      class="text-xl font-medium leading-normal text-neutral-800"
                      id="exampleModalScrollableLabel">
                     {name}
                    </h5>
                    <button
                      type="button"
                      class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="relative p-4">
                   
<div class=" p-5 max-w-md mx-auto rounded shadow-sm">
    
    <form class=" space-y-4">
        <input
          class="w-full border rounded h-10 px-4 focus:outline-none"
          placeholder="Name"
          type="text"
          required
        />
        <input
          class="w-full border rounded h-10 px-4 focus:outline-none"
          placeholder=" Your email address "
          type="email"
          required
        />
        <input
          class="w-full border rounded h-10 px-4 focus:outline-none"
          placeholder="Your phone"
          type="number"
          required
        />

        <div class="flex items-center ">
          <input
            class="w-full border rounded h-10 px-4 focus:outline-none -mr-7"
            placeholder="Your Address"
            type="text"
            required
          />
        </div>
         
        <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="submit"
                      class="inline-block rounded bg-red-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-500 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light">
                     Book Now
                    </button>
                  </div>
      </form>
</div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;