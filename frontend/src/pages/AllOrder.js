import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const AllOrder = () => {
    const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.allOrder.url, {
      method: SummaryApi.allOrder.method,
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
                  data.map((item, index) => (
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
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      );
}

export default AllOrder
