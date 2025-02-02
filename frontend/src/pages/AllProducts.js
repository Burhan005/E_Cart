// import React, { useEffect, useState } from 'react'
// import UploadProduct from '../components/UploadProduct'
// import SummaryApi from '../common'
// import AdminProductCard from '../components/AdminProductCard'

// const AllProducts = () => {

//   const [openUploadProduct,setOpenUploadProduct]=useState(false)
//   const [allProduct,setAllProduct]=useState([])
//   const fetchAllProduct = async() =>{
//     const response = await fetch(SummaryApi.allProduct.url)
//     const dataResponse = await response.json()

//     console.log("product data",dataResponse)

//     setAllProduct(dataResponse?.data || [])
//   }

//   useEffect(()=>{
//     fetchAllProduct()
//   },[])

//   return (
//     <div>
//         <div className='bg-white py-2 px-4 flex justify-between items-center'>
//             <h2 className='font-bold text-lg'>All Product</h2>
//             <button  className='border-2 border-red-600 text-red-600 hover:bg-cyan-600 hover:text-white transition-all py-1 px-3 rounded-full' 
//               onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
//         </div>
//   {/**all product */}
//   <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
//           {
//             allProduct.map((product,index)=>{ 
//               return(
//                 <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
//               )
//             })
//           }
//         </div>



//           {
//             openUploadProduct && (
//               <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>

//             )
//           }

//         {/* Upload Product Component */}
        
//         </div>
//   )
// }

// export default AllProducts
import React, { useEffect, useState } from 'react';
import UploadProduct from '../components/UploadProduct';
import SummaryApi from '../common';
import AdminProductCard from '../components/AdminProductCard';

const AllProducts = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false);
    const [allProduct, setAllProduct] = useState([]);

    // Function to fetch all products
    const fetchAllProduct = async () => {
        try {
            const response = await fetch(SummaryApi.allProduct.url);
            const dataResponse = await response.json();
            console.log("Product data:", dataResponse);
            setAllProduct(dataResponse?.data || []);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchAllProduct();
    }, []);

    return (
        <div>
            <div className='bg-white py-2 px-4 flex justify-between items-center'>
                <h2 className='font-bold text-lg'>All Products</h2>
                <button
                    className='border-2 border-red-600 text-red-600 hover:bg-cyan-600 hover:text-white transition-all py-1 px-3 rounded-full'
                    onClick={() => setOpenUploadProduct(true)}
                >
                    Upload Product
                </button>
            </div>

            {/* All products display */}
            <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
                {allProduct.map((product, index) => (
                    <AdminProductCard
                        data={product}
                        key={index + "allProduct"}
                        fetchdata={fetchAllProduct} // Pass fetch function for refreshing the list
                    />
                ))}
            </div>

            {/* Upload Product Component */}
            {openUploadProduct && (
                <UploadProduct
                    onClose={() => setOpenUploadProduct(false)}
                    fetchData={fetchAllProduct} // Fetch updated product list after upload
                />
            )}
        </div>
    );
};

export default AllProducts;

