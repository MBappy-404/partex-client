import React from 'react';
import AddProduct from './AddProduct';
import MyOrder from './MyOrder';

const Dashboard = () => {
     return (
          <div className='py-10'>
               <ul
  class="mb-4 flex list-none flex-col  justify-center flex-wrap border-b-0 pl-0 md:flex-row"
  id="tabs-tab3"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <a
      href="#tabs-home3"
      class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-home-tab3"
      data-te-toggle="pill"
      data-te-target="#tabs-home3"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home3"
      aria-selected="true"
      >My Order</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-profile3"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-profile-tab3"
      data-te-toggle="pill"
      data-te-target="#tabs-profile3"
      role="tab"
      aria-controls="tabs-profile3"
      aria-selected="false"
      >All Seller</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages3"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-messages-tab3"
      data-te-toggle="pill"
      data-te-target="#tabs-messages3"
      role="tab"
      aria-controls="tabs-messages3"
      aria-selected="false"
      >All Buyer</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages4"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-messages-tab4"
      data-te-toggle="pill"
      data-te-target="#tabs-messages4"
      role="tab"
      aria-controls="tabs-messages4"
      aria-selected="false"
      >My Products</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages5"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-messages-tab4"
      data-te-toggle="pill"
      data-te-target="#tabs-messages5"
      role="tab"
      aria-controls="tabs-messages5"
      aria-selected="false"
      >Add Product </a>
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages6"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      id="tabs-messages-tab4"
      data-te-toggle="pill"
      data-te-target="#tabs-messages6"
      role="tab"
      aria-controls="tabs-messages6"
      aria-selected="false"
      >Wishlist </a>
  </li>
</ul>
<div>
  <div
    class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home3"
    role="tabpanel"
    data-te-tab-active
    aria-labelledby="tabs-home-tab3">
    <MyOrder></MyOrder>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile3"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab3">
   
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages3"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab3">
    <MyOrder></MyOrder>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages4"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab4">
   <MyOrder></MyOrder>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages5"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab5">
   <AddProduct></AddProduct>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages6"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab6">
    Tab 6 content button version
  </div>
</div>
          </div>
     );
};

export default Dashboard;