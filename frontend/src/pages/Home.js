import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCard from '../components/VerticalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      
<HorizontalCardProduct category={"watches"} heading={"Top Airpods"}/>
      <HorizontalCardProduct category={"earphones"} heading={"Top Earphones"}/>


      <VerticalCardProduct category={"camera"} heading={"Capture Your Moments"}/>      
      <VerticalCardProduct category={"refrigerator"} heading={"Refreshments"}/>
      <VerticalCardProduct category={"televisions"} heading={"Entertainment"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speakers"}/>
      <VerticalCardProduct category={"processor"} heading={"Processors"}/>
      
      
      

      
    </div>
  )
}

export default Home
