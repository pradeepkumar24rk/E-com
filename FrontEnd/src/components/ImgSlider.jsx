import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    let setting={
        dots:false,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }


    const imgs=[
      { img:"/images/slider-scales.jpg"},
      { img:"/images/slider-scale.jpg"},
      { img:"/images/slider-badging.jpg"},
      { img:"/images/slider-badag.jpg"},

  ]


  return (
    <Carousel  {...setting}>
      {imgs.map((data)=>(<Wrap>
        <img src={data.img} alt="" srcset="" />
      </Wrap>))}
      
    </Carousel>
  )
}

export default ImgSlider


const Carousel= styled(Slider)`
margin-top:20px;

`
const Wrap =styled.div`
cursor:pointer;
img{
    /* border :4px solid transparent; */
    border-radius:2px;
    width:100%;
    height:100%;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px; */

}
`