import React from 'react';

const Subscribe = () => {
     return (
          <div className='py-10  sm:px-0    lg:px-24'>
<div class="bg-white flex items-center justify-center p-3 md:p-12">
  <div class="mx-auto w-full  bg-red-200 px-5 py-10">
    <div class="grid   md:grid-cols-2 ">
      <div class="flex justify-center md:justify-center">
        <img class="w-full max-w-sm" src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png" alt="img" />
      </div>
      <div class="flex items-center">
        <div class="mx-auto md:mx-0">
          <h3 class="text-4xl font-bold text-gray-600">Subscribe</h3>
          <p class="mt-2  text-lg text-gray-500">Join our weekly digest. You'll also receive <br /> some of our best posts today.</p>
          <form action="" class="mt-4 flex flex-col">
            <input type="email" name="email" id="email" placeholder="Enter your email" class="w-full rounded  bg-transparent px-3  py-2 text-gray-400 md:max-w-[18rem]" required />
            <button type="submit" class="mt-4 w-full max-w-[18rem] border-none rounded bg-red-600 px-14 py-2 text-center text-white">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
     );
};

export default Subscribe;