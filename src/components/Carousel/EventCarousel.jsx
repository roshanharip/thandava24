
import './EventCarousel.scss';


import slide_image_1 from '../../assets/OnlineEvents/1.png';
import slide_image_2 from '../../assets/OnlineEvents/2.png';
import slide_image_3 from '../../assets/OnlineEvents/3.png';
import slide_image_4 from '../../assets/OnlineEvents/4.png';
import slide_image_5 from '../../assets/OnlineEvents/5.png';
import slide_image_6 from '../../assets/OnlineEvents/6.png';
import slide_image_7 from '../../assets/OnlineEvents/7.png';
import slide_image_8 from '../../assets/OnlineEvents/8.png';
import slide_image_9 from '../../assets/OnlineEvents/9.png';
import slide_image_10 from '../../assets/OnlineEvents/10.png';
import slide_image_11 from '../../assets/OnlineEvents/11.png';
import slide_image_12 from '../../assets/OnlineEvents/12.png';



import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }
  static get CARD_STYLE() {
    return {
      height: "400px",
      width: "400px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#000",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }
  render() {
    return (
      <div className='MyCarousel'>
        
      <div style={MyCarousel.CONTAINER_STYLE}>
      <h1>EVENTS</h1>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <a href="https://forms.gle/9DvsWwKGNSiwepvG6"><div style={MyCarousel.CARD_STYLE } className='card1 card'></div></a>
          <a href="https://forms.gle/uFJscCXd4ZpeyA4v9"><div style={MyCarousel.CARD_STYLE} className='card2 card'></div></a>
          <a href="https://forms.gle/H8PBmk3xjMLv3ZWy7"><div style={MyCarousel.CARD_STYLE} className='card3 card'></div></a>
          <a href="https://forms.gle/ZcVdEj5kJfM5ZeAn9"><div style={MyCarousel.CARD_STYLE} className='card4 card'></div></a>
          <a href="https://forms.gle/ZUBHDwfvLv8QguN86"><div style={MyCarousel.CARD_STYLE} className='card5 card'></div></a>
          <a href="https://forms.gle/2Jjv6SdiTw4AsnBd8"><div style={MyCarousel.CARD_STYLE} className='card6 card'></div></a>
          <a href="https://forms.gle/gHdfBJC6jx84fEUz6"><div style={MyCarousel.CARD_STYLE} className='card7 card'></div></a>
          <a href="https://forms.gle/6QuLCedu4HZsYhLs7"><div style={MyCarousel.CARD_STYLE} className='card8 card'></div></a>
          <a href="https://forms.gle/Q59Eo8TdNP95Ggg47"><div style={MyCarousel.CARD_STYLE} className='card9 card'></div></a>
          <a href="https://forms.gle/bKxb23RWcJV5mFEz5"><div style={MyCarousel.CARD_STYLE} className='card10 card'></div></a>
          <a href="https://forms.gle/FKf43oX5tTUHHhs57"><div style={MyCarousel.CARD_STYLE} className='card11 card'></div></a>
          <a href="https://forms.gle/SLchi4BFNUvFXNxQ9"><div style={MyCarousel.CARD_STYLE} className='card12 card'></div></a>
        </ReactCardCarousel>
      </div>
      </div>
    );
  }
}
export default MyCarousel;
