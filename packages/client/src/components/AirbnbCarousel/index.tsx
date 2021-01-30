import React, { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SectionProjectsImages } from "../../graphql/generated";

interface AirbnbCarouselProps {
  images: SectionProjectsImages[];
}

const locateImage = (props: any, i: number) =>
  props.images[i].filename.startsWith("http")
    ? props.images[i].filename
    : require("../../assets/images/" + props.images[i]?.filename).default;

export const AirbnbCarousel: React.FC<AirbnbCarouselProps> = (
  props: AirbnbCarouselProps
) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const carousel: any = useRef();
  const carouselMobile: any = useRef();
  const [prevSlideClicked, setPrevSlideClicked] = useState<number | null>(null);
  const [currentSlideClicked, setCurrentSlideClicked] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState<number>(0);
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setOpen(!isOpen);
    const index = (e.target as HTMLInputElement).dataset.index;
    return index && setCurrentSlideClicked(parseInt(index));
  };
  // Saaad - Gotta rerender the component so that useRef can be called,
  // theres rendering issues when wrapping Carousel with Modal

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, [setTime]);

  // Allows setecting an initialSlide
  useEffect(() => {
    console.debug("rerendering");
    try {
      console.log(carousel);
      // Mobile slider
      // Takes Carousel components state
      const slideM = carouselMobile.current?.state?.selectedItem;
      typeof slideM == "number" && setCurrentSlideMobile(slideM);
      // Desktop Slider
      const slide = carousel.current?.state?.selectedItem;
      typeof slide == "number" && setCurrentSlide(slide);

      if (currentSlideClicked !== prevSlideClicked) {
        // Move to slide
        carousel.current.moveTo(currentSlideClicked);
        setPrevSlideClicked(currentSlideClicked);
      }
    } catch {}
  }, [time, currentSlide, currentSlideClicked, prevSlideClicked]);
  return (
    <div className="flex items-center">
      <Modal
        ariaHideApp
        className={`outline-none h-screen bg-white text-center animate-slideUp -mt-4 `}
        isOpen={isOpen}
        onRequestClose={handleClick}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        {/* Desktop Slideshow */}
        <div
          onClick={handleClick}
          className="absolute top-0 left-0 flex items-center justify-between px-4 py-1 m-4 text-base font-medium text-gray-800 transition duration-200 ease-in-out transform bg-gray-200 rounded-lg opacity-75 cursor-pointer active:scale-90 hover:bg-gray-400"
        >
          <GrClose className="mr-1 text-sm font-bold" />
          Close
        </div>
        <p className="px-2 py-1 pt-6 m-4 text-lg tracking-widest text-gray-700 rounded-lg">
          {currentSlide + 1}/{props.images.length}
        </p>
        <div className="flex items-center justify-between">
          <div
            onClick={() => carousel.current.decrement()}
            className={`hover:bg-gray-100 transition duration-200 ease-in-out transform active:scale-90 cursor-pointer mx-6 border font-bold  border-gray-700 rounded-full h-12 w-12 text-gray-500 flex justify-center items-center text-xl ${
              !currentSlide && "invisible"
            }`}
          >
            <BiChevronLeft />
          </div>
          <Carousel
            renderItem={(item) => (
              <div className="w-full h-full bg-white">{item}</div>
            )}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            className="w-full max-w-3xl animate-fadeIn"
            ref={carousel}
          >
            {props.images.map((img, i) => (
              <>
                <img alt={props.images[i].alt} src={locateImage(props, i)} />
              </>
            ))}
          </Carousel>
          <div
            onClick={() => carousel.current.increment()}
            className={`animated-fadeIn hover:bg-gray-100 transition duration-200 ease-in-out transform active:scale-90 cursor-pointer mx-6 border font-bold  border-gray-700 rounded-full h-12 w-12 text-gray-500 flex justify-center items-center text-xl ${
              currentSlide === props.images.length - 1 && "invisible"
            } `}
          >
            <BiChevronRight />
          </div>
        </div>
        <p className="my-8 text-gray-700">{props.images[currentSlide].alt}</p>
      </Modal>

      {/* Desktop gallery */}
      <div className="hidden w-full grid-cols-4 px-2 md:grid">
        {/* TODO: use background image, wrap images with skeleton loader */}
        <img
          alt={props.images[0].alt}
          data-index={0}
          onClick={handleClick}
          className="w-full col-start-1 col-end-3 pr-2 rounded-tl-lg rounded-bl-lg cursor-pointer hover:opacity-75"
          src={locateImage(props, 0)}
        />

        <div className="flex flex-col justify-between pr-2">
          <img
            alt={props.images[1].alt}
            data-index={1}
            className="h-auto cursor-pointer hover:opacity-75"
            onClick={handleClick}
            src={locateImage(props, 1)}
          />
          <img
            alt={props.images[2].alt}
            data-index={2}
            onClick={handleClick}
            className="h-auto cursor-pointer hover:opacity-75 "
            src={locateImage(props, 2)}
          />
        </div>

        <div className="flex flex-col justify-between pr-2">
          <img
            alt={props.images[3].alt}
            data-index={3}
            onClick={handleClick}
            className="h-auto rounded-tr-lg cursor-pointer hover:opacity-75 "
            src={locateImage(props, 3)}
          />
          <div>
            <img
              alt={props.images[4].alt}
              data-index={4}
              onClick={handleClick}
              className="h-auto rounded-br-lg cursor-pointer hover:opacity-75"
              src={locateImage(props, 4)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Slideshow */}
      {/* prevents slideshow showing up when modals open */}
      {!isOpen && (
        <div className="relative shadow-lg md:hidden">
          <Carousel
            className="w-full bg-current"
            ref={carouselMobile}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            {props.images.map((img, i) => (
              <img
                alt={props.images[i].alt}
                className="max-w-"
                src={locateImage(props, i)}
              />
            ))}
          </Carousel>

          <p className="absolute bottom-0 right-0 px-2 py-1 m-4 text-sm tracking-widest bg-gray-900 bg-opacity-50 rounded-lg">
            {currentSlideMobile + 1}/{props.images.length}
          </p>
        </div>
      )}
    </div>
  );
};
