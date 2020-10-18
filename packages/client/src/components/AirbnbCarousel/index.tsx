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
    : require("../../assets/images/" + props.images[i]?.filename);

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
    try {
      // Mobile slider
      // Takes Carousel components state
      const slideM = carouselMobile.current?.state?.selectedItem;
      typeof slideM === "number" && setCurrentSlideMobile(slideM);
      // Desktop Slider
      const slide = carousel.current?.state?.selectedItem;
      typeof slide === "number" && setCurrentSlide(slide);

      if (currentSlideClicked !== prevSlideClicked) {
        // Move to slide
        carousel.current.moveTo(currentSlideClicked);
        setPrevSlideClicked(currentSlideClicked);
      }
    } catch {}
  }, [currentSlideClicked, prevSlideClicked]);
  return (
    <div className="flex items-center max-w-6xl">
      <Modal
        className={`outline-none bg-white text-center animate-slideUp`}
        isOpen={isOpen}
        onRequestClose={handleClick}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        {/* Desktop Slideshow */}
        <div
          onClick={handleClick}
          className="flex opacity-75 transition duration-200 ease-in-out transform active:scale-90 text-base cursor-pointer font-medium items-center justify-between px-4 py-1 m-4 absolute left-0 top-0 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          <GrClose className="mr-1 text-sm font-bold" />
          Close
        </div>
        <p className="mt-4 my-8 text-gray-700 tracking-widest m-4 rounded-lg text-lg px-2 py-1">
          {currentSlide + 1}/{props.images.length}
        </p>
        <div className="flex justify-between items-center">
          <div
            onClick={() => carousel.current.decrement()}
            className={`animate-fadeIn hover:bg-gray-100 transition duration-200 ease-in-out transform active:scale-90 cursor-pointer mx-6 border font-bold  border-gray-700 rounded-full h-12 w-12 text-gray-500 flex justify-center items-center text-xl ${
              !currentSlide && "invisible"
            }`}
          >
            <BiChevronLeft />
          </div>
          <Carousel
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            className="w-full max-w-3xl transition duration-200 ease-in-out translate-y-full"
            ref={carousel}
          >
            {props.images.map((img, i) => (
              <>
                <img
                  alt={props.images[i].alt}
                  className="animate-fadeIn"
                  src={locateImage(props, i)}
                />
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
      <div className="hidden md:grid grid-cols-4 px-2">
        {/* TODO: use background image, wrap images with skeleton loader */}
        <img
          alt={props.images[0].alt}
          data-index={0}
          onClick={handleClick}
          className="pr-2 w-full rounded-tl-lg rounded-bl-lg col-start-1 col-end-3  hover:bg-gray-900 hover:bg-opacity-25 cursor-pointer"
          src={locateImage(props, 0)}
        />

        <div className="flex flex-col justify-between pr-2">
          <img
            alt={props.images[1].alt}
            data-index={1}
            className=" h-auto cursor-pointer hover:opacity-75 "
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
        <div className="md:hidden relative shadow-lg">
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

          <p className="tracking-widest m-4 rounded-lg text-sm absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 px-2 py-1">
            {currentSlideMobile + 1}/{props.images.length}
          </p>
        </div>
      )}
    </div>
  );
};
