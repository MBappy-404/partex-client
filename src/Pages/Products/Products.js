import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

     const products = useLoaderData();
     console.log(products);
     return (
          <div className='py-10' >
               <h1 className='ml-5 text-xl font-bold'>Total Products: {products.length} </h1>
            <div className=' flex justify-center'>
            <div className='grid px-5  sm:grid-cols-1 gap-10 md:grid-cols-3'>
             {
                    products?.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
               }
             </div>
            </div>
          </div>
     );
};

export default Products;