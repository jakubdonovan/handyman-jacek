import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SectionProjects } from "../../graphql/generated";
interface AirbnbCarouselProps {
  currentProject: SectionProjects;
}

export const AirbnbCarousel: React.FC<AirbnbCarouselProps> = ({
  currentProject,
}: AirbnbCarouselProps) => {
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

  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // Allows setecting an initialSlide
  useEffect(() => {
    try {
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
  });
  return (
    <>
      {/* Slideshow */}
      <Modal
        className=""
        isOpen={isOpen}
        onRequestClose={handleClick}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        <Carousel className="bg-white" ref={carousel}>
          {currentProject?.images.map((img) => (
            <img src={require("../../assets/images/" + img?.filename)} />
          ))}
        </Carousel>
        <p className="tracking-widest m-4 rounded-lg text-sm absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 px-2 py-1">
          {currentSlide + 1}/{currentProject.images.length}
        </p>
      </Modal>
      ){/* Portfolio Images */}
      <div className="">
        <h2 className="p-4">My portfolio</h2>
        <div className="md:hidden relative shadow-lg">
          <Carousel
            className="bg-current"
            ref={carouselMobile}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            {currentProject.images.map((img) => (
              <img src={require("../../assets/images/" + img?.filename)} />
            ))}
          </Carousel>

          <p className="tracking-widest m-4 rounded-lg text-sm absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 px-2 py-1">
            {currentSlideMobile + 1}/{currentProject.images.length}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-4 px-2">
          {/* TODO: use background image, wrap images with skeleton loader */}
          <img
            data-index={0}
            onClick={handleClick}
            className="pr-2 h-64 w-full rounded-tl-lg rounded-bl-lg col-start-1 col-end-3 hover:opacity-75 cursor-pointer"
            src={require("../../assets/images/" +
              currentProject.images[0]?.filename)}
          />

          <div className="grid grid-row-2 pr-2">
            <img
              data-index={1}
              className="pb-1 cursor-pointer hover:opacity-75 h-32 w-full"
              onClick={handleClick}
              src={require("../../assets/images/" +
                currentProject.images[1]?.filename)}
            />
            <img
              data-index={2}
              onClick={handleClick}
              className="pt-1 cursor-pointer hover:opacity-75 h-32 w-full"
              src={require("../../assets/images/" +
                currentProject.images[2]?.filename)}
            />
          </div>

          <div className="pr-2">
            <img
              data-index={3}
              onClick={handleClick}
              className="pb-1 rounded-tr-lg w-full cursor-pointer hover:opacity-75 h-32"
              src={require("../../assets/images/" +
                currentProject.images[3]?.filename)}
            />
            <img
              data-index={4}
              onClick={handleClick}
              className="pt-1 rounded-br-lg w-full cursor-pointer hover:opacity-75 h-32"
              src={require("../../assets/images/" +
                currentProject.images[4]?.filename)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
