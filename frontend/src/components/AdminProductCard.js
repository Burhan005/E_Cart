// import React, { useState } from 'react'
// import { MdModeEditOutline } from "react-icons/md";
// import AdminEditProduct from './AdminEditProduct';
// import displayINRCurrency from '../helpers/displayCurrency';

// const AdminProductCard = ({
//     data,
//     fetchdata
// }) => {
//     const [editProduct,setEditProduct] = useState(false)

//   return (
//     <div className='bg-blue-100 p-4 rounded '>
//        <div className='w-40'>
//             <div className='w-32 h-32 flex justify-center items-center'>
//             <img src={data?.productImage[0]} className='mx-auto object-fill h-full'/>   

//            </div>       
//             <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

//             <div>

//                 <p className='font-semibold'>
//                   {
//                     displayINRCurrency(data.sellingPrice)
//                   }
        
//                 </p>

//                 <div className='w-fit ml-auto p-2 bg-yellow-400 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)}>
//                     <MdModeEditOutline/>
//                 </div>

//             </div>

          
//        </div>
        
//         {
//           editProduct && (
//             <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
//           )
//         }
    
//     </div>
//   )
// }

// export default AdminProductCard
// import React, { useState } from 'react';
// import { MdModeEditOutline, MdDelete } from "react-icons/md";
// import AdminEditProduct from './AdminEditProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import SummaryApi from '../common'; // Import your API definitions
// import { ToastContainer, toast } from 'react-toastify'; // Import toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

// const AdminProductCard = ({ data, fetchdata }) => {
//     const [editProduct, setEditProduct] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

//     const handleDelete = async () => {
//         try {
//             const response = await fetch(SummaryApi.deleteProduct.url(data._id), {
//                 method: SummaryApi.deleteProduct.method,
//                 credentials: 'include',
//             });

//             const result = await response.json();
//             if (result.success) {
//                 fetchdata(); // Refresh the product list
//                 toast.success("Product deleted successfully"); // Show success toast
//             } else {
//                 toast.error(result.message || "An error occurred while deleting the product."); // Show error toast
//             }
//         } catch (error) {
//             toast.error("An error occurred while deleting the product."); // Show error toast
//             console.error(error);
//         } finally {
//             setIsModalOpen(false); // Close the modal after handling deletion
//         }
//     };

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     return (
//         <div className='bg-blue-100 p-4 rounded'>
//             <div className='w-40'>
//                 <div className='w-32 h-32 flex justify-center items-center'>
//                     <img src={data?.productImage[0]} className='mx-auto object-fill h-full' />
//                 </div>
//                 <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
//                 <div>
//                     <p className='font-semibold'>
//                         {displayINRCurrency(data.sellingPrice)}
//                     </p>

//                     <div className='flex justify-between mt-2'>
//                         <div className='w-fit p-2 bg-yellow-400 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
//                             <MdModeEditOutline />
//                         </div>
//                         <div className='w-fit p-2 bg-red-400 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' onClick={openModal}>
//                             <MdDelete />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {editProduct && (
//                 <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
//             )}

//             {/* Confirmation Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
//                         <h2 className="text-lg font-bold mb-4 text-center">Are you sure you want to delete this product?</h2>
//                         <div className="flex justify-around">
//                             <button 
//                                 onClick={handleDelete} 
//                                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                             >
//                                 Yes, Delete
//                             </button>
//                             <button 
//                                 onClick={closeModal} 
//                                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <ToastContainer /> {/* Render the toast container */}
//         </div>
//     );
// };

// export default AdminProductCard;
import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common'; // Import your API definitions
import { toast } from 'react-toastify'; // Import toastify

const AdminProductCard = ({ data, fetchdata }) => {
    const [editProduct, setEditProduct] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

    const handleDelete = async () => {
        try {
            const response = await fetch(SummaryApi.deleteProduct.url(data._id), {
                method: SummaryApi.deleteProduct.method,
                credentials: 'include',
            });

            const result = await response.json();
            if (result.success) {
                fetchdata(); // Refresh the product list
                toast.success("Product deleted successfully", { autoClose: 3000 }); // Show success toast
            } else {
                toast.error(result.message || "An error occurred while deleting the product.", { autoClose: 3000 }); // Show error toast
            }
        } catch (error) {
            toast.error("An error occurred while deleting the product.", { autoClose: 3000 }); // Show error toast
            console.error(error);
        } finally {
            setIsModalOpen(false); // Close the modal after handling deletion
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-blue-100 p-4 rounded'>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={data?.productImage[0]} alt={data.productName} className='mx-auto object-fill h-full' />
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
                <div>
                    <p className='font-semibold'>
                        {displayINRCurrency(data.sellingPrice)}
                    </p>

                    <div className='flex justify-between mt-2'>
                        <div className='w-fit p-2 bg-yellow-400 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
                            <MdModeEditOutline />
                        </div>
                        <div className='w-fit p-2 bg-red-400 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' onClick={openModal}>
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>

            {editProduct && (
                <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
            )}

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-4 text-center">Are you sure you want to delete this product?</h2>
                        <div className="flex justify-around">
                            <button 
                                onClick={handleDelete} 
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Yes, Delete
                            </button>
                            <button 
                                onClick={closeModal} 
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProductCard;
