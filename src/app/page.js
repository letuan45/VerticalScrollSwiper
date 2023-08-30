"use client";
import FirstSection from "@/components/FirstSection";
import FouthSection from "@/components/FouthSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import { useEffect, useRef, useState } from "react";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";

export const metadata = {
  title: "A Sample Title",
};

export default function Home() {
  const swiperRef = useRef(null);
  const scrollDirection = useDetectScroll({});
  const [isScrollingUp, setIsScrollingUp] = useState(null);

  // if(swiperRef && swiperRef.current.getBoundingClientRect().top !== 0) {
  //   swiperRef.current.swiper.enabled = false;
  // }

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleSlideChange = (swiper) => {};

  //Xác định scroll lên, đạt đến 100vh của slider thì enable
  useEffect(() => {
    const handleScrollWheel = (event) => {
      const wheelDirection = event.deltaY > 0 ? "down" : "up";
      const swiperElement = swiperRef.current;
      const swiperObj = swiperElement.swiper;
      const elementTop = swiperElement.getBoundingClientRect().top;

      if (
        elementTop === 0 &&
        swiperObj.isEnd &&
        swiperObj.activeIndex === 3 &&
        wheelDirection === "down"
      ) {
        swiperObj.enabled = false;
      }

      //Kiểm tra xem phần tử có trong tầm nhìn của viewport không
      if (elementTop === 0 && swiperObj.isEnd && wheelDirection === "up") {
        swiperObj.enabled = true;
      }
    };

    window.addEventListener("wheel", handleScrollWheel);

    // Dọn dẹp sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          modules={[EffectFade, Mousewheel]}
          direction={"vertical"}
          effect="fade"
          allowTouchMove={false}
          className="mySwiper"
          mousewheel={true}
          speed={1500}
        >
          <SwiperSlide>
            <FirstSection />
          </SwiperSlide>
          <SwiperSlide>
            <SecondSection />
          </SwiperSlide>
          <SwiperSlide>
            <ThirdSection />
          </SwiperSlide>
          <SwiperSlide>
            <FouthSection />
          </SwiperSlide>
        </Swiper>
        <div className="h-screen w-full bg-slate-500" id="scrollToElement"></div>
      </div>
    </>
  );
}
