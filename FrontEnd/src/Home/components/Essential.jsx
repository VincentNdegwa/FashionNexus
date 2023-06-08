import "../../styles/Essentials.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowForwardIos, MdLogin } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";

const Essential = (props) => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const randomData = () => {
      const arr = [];
      for (let i = 0; i <= 9; i++) {
        const randomNumber = Math.floor(
          Math.random() * props?.femaleData.length
        );
        let randomItem = props?.femaleData[randomNumber];
        if (!arr.includes(randomItem)) {
          arr.push(randomItem);
        } else {
          i--;
        }
        // console.log(randomNumber);
      }
      setData(arr);
    };

    if (props.femaleData.length > 0) {
      console.log("random data called....");
      randomData();
    }
  }, [props.femaleData]);

  const swiperRef = useRef(null);
  const [view, setView] = React.useState(() => {
    if (window.innerWidth > 1200 && window.innerWidth < 1300) {
      return 3;
    } else if (window.innerWidth > 1300) {
      return 4;
    } else if (window.innerWidth < 1200 && window.innerWidth > 700) {
      return 2;
    } else if (window.innerWidth < 570) {
      return 1;
    }
  });

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200 && window.innerWidth < 1300) {
        setView(3);
      } else if (window.innerWidth > 1300) {
        setView(4);
      } else if (window.innerWidth < 1200 && window.innerWidth > 700) {
        setView(2);
      } else if (window.innerWidth < 570) {
        setView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      slidesPerView: view,
      spaceBetween: 5,
    });

    return () => {
      swiper.destroy();
    };
  }, [view]);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="Essential">
      <div className="essential-holder">
        <div className="upper-item">
          <div className="headers">
            <h1>For your essential style</h1>
            <p>
              Discover the latest trends, fashion tips, and expert advice that
              will keep you ahead of the curve. From must-have wardrobe
              essentials to glamorous red carpet looks, our website is your
              go-to source for staying on top of the fashion game.
            </p>
          </div>
          <div className="header-btn">
            <div className="control">
              <h1 onClick={slidePrev}>
                <AiOutlineArrowLeft />
              </h1>
              <h1 onClick={slideNext}>
                <AiOutlineArrowRight />
              </h1>
            </div>

            <h1>
              See All <MdArrowForwardIos />
            </h1>
          </div>
        </div>
        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {data !== null &&
              data.map((item, i) => {
                return (
                  <div className="swiper-slide" key={i}>
                    <div className="item-img">
                      <img src={item?.img} alt="item" />
                    </div>
                    <div className="item-description">
                      <h2>{item.name}</h2>
                      <p>{item.desc}</p>
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essential;
