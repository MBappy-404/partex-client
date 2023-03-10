import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

    const {data: categories = [], refetch  } = useQuery({
        queryKey:['categories'],
        queryFn: async()=>{
          // setLoading(true)
             const res = await fetch('https://resused-server.vercel.app/categories');
             const data = await res.json();
            //  setLoading(false)
             return data;
             
        }
    })



    return (
        <div className='py-10'>
            <div>
                <h1 className='text-2xl font-bold text-center'>Discover By Categories</h1>
                <p className='text-gray-500 text-center font-base mt-1 text-base '>Discover Your Desired Furniture</p>
            </div>

            {/* <!-- component --> */}

            <div className='py-10'>
                <div class="container grid px-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
                   
                   {
                    categories.map(category => 
                        <div key={category._id} class="w-full rounded">
                        <Link to={`/products/${category.category_id}`}> <img src={category.image} className='h-56 cursor-pointer' alt="img" /></Link>
                        <h1 className='text-lg font-semibold text-center mt-3'>{category.category_Name}</h1>
                    </div>
                        
                        )
                   }
                    
                </div>
            </div>


        </div>
    );
};

export default Category;