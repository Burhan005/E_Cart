// import React, { useEffect, useState } from 'react'

// import moment from 'moment'
// import SummaryApi from '../common'
// import displayINRCurrency from '../helpers/displayCurrency'
// const OrderPage = () => {
//   const [data,setData]=useState([])


//   const fetchOrderDetails= async()=>{
//     const response = await fetch(SummaryApi.getOrder.url,{
//       method:SummaryApi.getOrder.method,
//       credentials:'include'
//     })

// const responseData=await response.json()
// setData(responseData.data)
// console.log("order details,",responseData)
//   }

//   useEffect(()=>{
//     fetchOrderDetails()

//   },[])
//   return (
//     <div>
//     {
//       !data[0] && (
//         <p>No order found</p>

//       )
//     }

//     <div className='p-4 w-full'>
//     {
//       data.map((item,index)=>{
//         return (
//           <div key={item.userId+index}>
//           <p className='font-semibold text-lg'>{moment(item.createdAt).format('LL')}</p>
//          <div className='border rounded'>
//         <div className='flex justify-between'>
//         <div className='grid gap-2'>
//           {
//             item.productDetails.map((product,index)=>{
//               return(
//                 <div key={product.productId+index}className='flex gap-3 bg-slate-100'>
//                 <img src={product.image[0]} alt='product '
//                   className='w-28 h-28 bg-slate-200 object-scale-down p-2'
//                 />
//                 <div>
//                 <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
//               <div className='flex items-center gap-5 mt-1'>
//               <div className='text-lg text-cyan-700 font-medium'>{displayINRCurrency(product.price)}</div>
//               <p>Quantity {product.quantity}</p>
//               </div>
//                 </div>
//                 </div>
//               )
//             })
//           }
//           </div>
//           <div className='flex flex-col gap-4 p-2 min-w-[300px]'>
//           <div>
//             <div className='text-lg font-medium text-cyan-600'>Payment Details</div>
//             <p className='ml-1'>Payment method : {item.paymentDetails.payment_method_type[0]}</p>
//             <p className='ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
//           </div>
//           <div>
//           <div className='text-lg font-medium text-cyan-600'>Shipping Details :</div>
               
//           {
//             item.shipping_options.map((shipping,index)=>{
//               return(
//                 <div key={shipping.shipping_rate} className=' ml-1'>
//                   Shipping Amount : {shipping.shipping_amount}
//                 </div>
//               )

//             })
//           }
//           </div>
//           </div>
//         </div>

//           <div className='font-semibold ml-auto w-fit lg:text-xl'>
//           Total Amount : {item.totalAmount-100}
//           </div>
//           <div className='font-semibold ml-auto w-fit lg:text-xl'>
          
//           Total Amount + Shipping: {item.totalAmount}
//           </div>
//          </div>

//           </div>
         

//         )

//       })
      

//     }

//     </div>
      
//     </div>
//   )
// }

// export default OrderPage

// import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import SummaryApi from '../common';
// import displayINRCurrency from '../helpers/displayCurrency';

// const OrderPage = () => {
//   const [data, setData] = useState([]);

//   const fetchOrderDetails = async () => {
//     const response = await fetch(SummaryApi.getOrder.url, {
//       method: SummaryApi.getOrder.method,
//       credentials: 'include',
//     });
//     const responseData = await response.json();
//     setData(responseData.data);
//     console.log("Order details:", responseData);
//   };

//   useEffect(() => {
//     fetchOrderDetails();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       {
//         !data[0] ? (
//           <p className="text-center text-xl font-semibold">No orders found</p>
//         ) : (
//           <div className="space-y-6">
//             {
//               data.map((item, index) => (
//                 <div key={item.userId + index} className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105">
//                   <p className="font-semibold text-lg text-gray-800">{moment(item.createdAt).format('LL')}</p>
//                   <div className="flex justify-between mt-4">
//                     <div className="grid gap-4 flex-grow">
//                       {
//                         item.productDetails.map((product, index) => (
//                           <div key={product.productId + index} className="flex gap-4 p-2 border rounded bg-gray-50 hover:bg-gray-100 transition">
//                             <img src={product.image[0]} alt='product' className='w-24 h-24 object-cover rounded' />
//                             <div className="flex flex-col justify-between w-full">
//                               <div className='font-medium text-lg text-gray-700 line-clamp-1'>{product.name}</div>
//                               <div className='flex items-center justify-between'>
//                                 <div className='text-lg text-cyan-700 font-medium'>{displayINRCurrency(product.price)}</div>
//                                 <div className='flex items-center border rounded-full bg-gray-200 px-2 py-1'>
//                                   <p className='text-gray-700'>Qty: {product.quantity}</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       }
//                     </div>
//                     <div className='flex flex-col gap-4 p-4 min-w-[250px]'>
//                       <div>
//                         <div className='text-lg font-medium text-cyan-600'>Payment Details</div>
//                         <p className='ml-1'>Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
//                         <p className='ml-1'>Payment Status: {item.paymentDetails.payment_status}</p>
//                       </div>
//                       <div>
//                         <div className='text-lg font-medium text-cyan-600'>Shipping Details:</div>
//                         {
//                           item.shipping_options.map((shipping, index) => (
//                             <div key={shipping.shipping_rate} className='ml-1'>
//                               Shipping Amount: {displayINRCurrency(shipping.shipping_amount)}
//                             </div>
//                           ))
//                         }
//                       </div>
//                     </div>
//                   </div>
//                   <div className='mt-4 flex justify-between font-semibold text-lg'>
//                     <div>Total Amount: {displayINRCurrency(item.totalAmount - 100)}</div>
//                     <div>Total Amount + Shipping: {displayINRCurrency(item.totalAmount)}</div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import SummaryApi from '../common';
// import displayINRCurrency from '../helpers/displayCurrency';

// const OrderPage = () => {
//   const [data, setData] = useState([]);

//   const fetchOrderDetails = async () => {
//     const response = await fetch(SummaryApi.getOrder.url, {
//       method: SummaryApi.getOrder.method,
//       credentials: 'include',
//     });
//     const responseData = await response.json();
//     setData(responseData.data);
//     console.log("Order details:", responseData);
//   };

//   useEffect(() => {
//     fetchOrderDetails();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       {
//         !data[0] ? (
//           <p className="text-center text-xl font-semibold">No orders found</p>
//         ) : (
//           <div className="space-y-6">
//             {
//               data.map((item, index) => (
//                 <div key={item.userId + index} className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105">
//                   <h2 className="font-semibold text-2xl text-gray-800 mb-2">Order Date: {moment(item.createdAt).format('LL')}</h2>
                  
//                   <div className="flex justify-between">
//                     <div className="flex-grow">
//                       {
//                         item.productDetails.map((product, index) => (
//                           <div key={product.productId + index} className="flex gap-4 p-2 border-b last:border-b-0">
//                             <img src={product.image[0]} alt='product' className='w-24 h-24 object-cover rounded' />
//                             <div className="flex flex-col justify-between w-full">
//                               <div className='font-medium text-lg text-gray-700 line-clamp-1'>{product.name}</div>
//                               <div className='flex items-center justify-between'>
//                                 <div className='text-lg text-cyan-700 font-medium'>{displayINRCurrency(product.price)}</div>
//                                 <div className='flex items-center border rounded-full bg-gray-200 px-2 py-1'>
//                                   <p className='text-gray-700'>Qty: {product.quantity}</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       }
//                     </div>

//                     <div className='flex flex-col gap-4 p-4 min-w-[250px]'>
//                       <div className='border p-2 rounded-lg bg-gray-50'>
//                         <h3 className='text-lg font-medium text-cyan-600'>Payment Details</h3>
//                         <p className='ml-1'>Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
//                         <p className='ml-1'>Payment Status: <span className={`font-semibold ${item.paymentDetails.payment_status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{item.paymentDetails.payment_status}</span></p>
//                       </div>

//                       <div className='border p-2 rounded-lg bg-gray-50'>
//                         <h3 className='text-lg font-medium text-cyan-600'>Shipping Details:</h3>
//                         {
//                           item.shipping_options.map((shipping, index) => (
//                             <div key={shipping.shipping_rate} className='ml-1'>
//                               Shipping Amount: {displayINRCurrency(shipping.shipping_amount)}
//                             </div>
//                           ))
//                         }
//                       </div>
//                     </div>
//                   </div>

//                   <div className='mt-4 flex justify-between font-semibold text-lg border-t pt-4'>
//                     <div>Total Amount: {displayINRCurrency(item.totalAmount - 100)}</div>
//                     <div>Total Amount + Shipping: {displayINRCurrency(item.totalAmount)}</div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default OrderPage;
// import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import SummaryApi from '../common';
// import displayINRCurrency from '../helpers/displayCurrency';

// const OrderPage = () => {
//   const [data, setData] = useState([]);

//   const fetchOrderDetails = async () => {
//     const response = await fetch(SummaryApi.getOrder.url, {
//       method: SummaryApi.getOrder.method,
//       credentials: 'include',
//     });
//     const responseData = await response.json();
//     setData(responseData.data);
//     console.log("Order details:", responseData);
//   };

//   useEffect(() => {
//     fetchOrderDetails();
//   }, []);

//   return (
//     <div className="container mx-auto p-8">
//       {
//         !data[0] ? (
//           <p className="text-center text-2xl font-bold text-gray-700">No orders found</p>
//         ) : (
//           <div className="space-y-8">
//             {
//               data.map((item, index) => (
//                 <div key={item.userId + index} className="border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105">
//                   <h2 className="font-bold text-2xl text-gray-800 mb-4">Order Date: {moment(item.createdAt).format('LL')}</h2>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="col-span-2">
//                       {
//                         item.productDetails.map((product, index) => (
//                           <div key={product.productId + index} className="flex gap-4 p-4 border-b last:border-b-0">
//                             <img src={product.image[0]} alt='product' className='w-28 h-28 object-cover rounded-lg shadow-sm' />
//                             <div className="flex flex-col justify-between w-full">
//                               <div className='font-medium text-xl text-gray-800'>{product.name}</div>
//                               <div className='flex items-center justify-between'>
//                                 <div className='text-lg text-indigo-600 font-semibold'>{displayINRCurrency(product.price)}</div>
//                                 <div className='flex items-center border rounded-full bg-gray-200 px-3 py-1'>
//                                   <span className='text-gray-700'>Qty: {product.quantity}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       }
//                     </div>

//                     <div className='flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm'>
//                       <div className='border p-4 rounded-lg bg-white'>
//                         <h3 className='text-lg font-semibold text-indigo-600'>Payment Details</h3>
//                         <p className='mt-2'>Payment Method: <span className='font-medium'>{item.paymentDetails.payment_method_type[0]}</span></p>
//                         <p className='mt-1'>Payment Status: <span className={`font-semibold ${item.paymentDetails.payment_status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{item.paymentDetails.payment_status}</span></p>
//                       </div>

//                       <div className='border p-4 rounded-lg bg-white'>
//                         <h3 className='text-lg font-semibold text-indigo-600'>Shipping Details</h3>
//                         {
//                           item.shipping_options.map((shipping, index) => (
//                             <div key={shipping.shipping_rate} className='mt-1'>
//                               Shipping Amount: <span className='font-medium'>{displayINRCurrency(shipping.shipping_amount)}</span>
//                             </div>
//                           ))
//                         }
//                       </div>
//                     </div>
//                   </div>

//                   <div className='mt-6 flex justify-between font-bold text-lg border-t pt-4'>
//                     <div>Total Amount: <span className='text-indigo-600'>{displayINRCurrency(item.totalAmount - 100)}</span></div>
//                     <div>Total Amount + Shipping: <span className='text-indigo-600'>{displayINRCurrency(item.totalAmount)}</span></div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default OrderPage;

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import SummaryApi from '../common';
import displayINRCurrency from '../helpers/displayCurrency';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: 'include',
    });
    const responseData = await response.json();
    setData(responseData.data);
    console.log("Order details:", responseData);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {
        !data[0] ? (
          <p className="text-center text-2xl font-bold text-gray-700">No orders found</p>
        ) : (
          <div className="space-y-8">
            {
              data.map((item, index) => {
                // Calculate total quantity for the order
                const totalQuantity = item.productDetails.reduce((acc, product) => acc + product.quantity, 0);

                return (
                  <div key={item.userId + index} className="border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105">
                    <h2 className="font-bold text-2xl text-gray-800 mb-4">Order Date: {moment(item.createdAt).format('LL')}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="col-span-2">
                        {
                          item.productDetails.map((product, index) => (
                            <div key={product.productId + index} className="flex gap-4 p-4 border-b last:border-b-0">
                              <img src={product.image[0]} alt='product' className='w-28 h-28 object-cover rounded-lg shadow-sm' />
                              <div className="flex flex-col justify-between w-full">
                                <div className='font-medium text-xl text-gray-800'>{product.name}</div>
                                <div className='flex items-center justify-between'>
                                  <div className='text-lg text-indigo-600 font-semibold'>{displayINRCurrency(product.price)}</div>
                                  <div className='flex items-center border rounded-full bg-gray-200 px-3 py-1'>
                                    <span className='text-gray-700'>Qty: {product.quantity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>

                      <div className='flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm'>
                        <div className='border p-4 rounded-lg bg-white'>
                          <h3 className='text-lg font-semibold text-indigo-600'>Payment Details</h3>
                          <p className='mt-2'>Payment Method: <span className='font-medium'>{item.paymentDetails.payment_method_type[0]}</span></p>
                          <p className='mt-1'>Payment Status: <span className={`font-semibold ${item.paymentDetails.payment_status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{item.paymentDetails.payment_status}</span></p>
                        </div>

                        <div className='border p-4 rounded-lg bg-white'>
                          <h3 className='text-lg font-semibold text-indigo-600'>Shipping Details</h3>
                          {
                            item.shipping_options.map((shipping, index) => (
                              <div key={shipping.shipping_rate} className='mt-1'>
                                Shipping Amount: <span className='font-medium'>{displayINRCurrency(shipping.shipping_amount)}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>

                    <div className='mt-6 flex justify-between font-bold text-lg border-t pt-4'>
                      <div>Total Amount: <span className='text-indigo-600'>{displayINRCurrency(item.totalAmount - 100)}</span></div>
                      <div>Total Amount + Shipping: <span className='text-indigo-600'>{displayINRCurrency(item.totalAmount)}</span></div>
                    </div>

                    {/* Display total quantity here */}
                    <div className='mt-4 text-lg font-semibold text-gray-800'>
                      Total Items: <span className='text-indigo-600'>{totalQuantity}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
        )
      }
    </div>
  );
};

export default OrderPage;




