import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useState } from "react";
import Modal from "react-modal";

//@ts-ignore
interface CardProps {
  sm?: boolean;
  images: Array<{
    filename: string;
    title: string;
    media: any;
    content: string;
    position: number;
  }>;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setOpen(!isOpen);
    const index = (e.target as HTMLInputElement).dataset.index;
    return index && setCurrentSlide(parseInt(index));
  };

  return (
    <div style={{ backgroundColor: "#4267B2" }} className="mt-2 max-w-5xl py-8">
      {/* Header */}
      <h2 className="font-roboto text-center text-3xl ">Painting Services</h2>
      <div className="mt-4 grid grid-cols-2 grid-flow grid-flow-col-dense text-center">
        <div
          className={
            !props.sm ? "ml-6 flex flex-col justify-center items-center" : ""
          }
        >
          {/* Description */}
          <p className="mt-6 w-full text-base leading-8 font-normal overflow-hidden">
            Years of Experience in Exterior/Interior Painting and decorating of
            private homes, communal areas and commercial spaces.
          </p>
          {!props.sm && (
            <img
              className="mt-4 w-8/12 md:w-4/12"
              src={require("../../assets/images/award.png")}
            />
          )}
          {/* Show More */}
          <div
            className={`${
              props.sm ? "block" : "hidden"
            } ml-6 mt-2 font-roboto text-xs text-center text-white opacity-50`}
          >
            Show More
          </div>

          {/* Reviews */}
          <div
            className={` ${
              props.sm ? "flex" : "hidden"
            } mt-4 m-4 items-start flex-col justify-center`}
          >
            <p className="uppercase text-center tracking-wide text-xs">
              Reviews
            </p>

            <img src={require("../../assets/images/stars.png")} />
          </div>

          {/* Pricing */}
          <div
            className={` ${
              props.sm ? "block" : "hidden"
            } text-left m-4 text-white uppercase tracking-wider`}
          >
            £<span className="text-4xl font-bold">50</span> per room
          </div>
        </div>

        {/* Image */}
        <div
          className="ml-12 h-64 pb-4 rounded-tl-lg rounded-bl-lg shadow-lg bg-cover lg:rounded-lg"
          style={{
            backgroundImage: `url(${require("../../assets/images/dec.webp")})`,
          }}
        />
      </div>

      {/* lg reviews/pricing */}
      {!props.sm && (
        <>
          <div className="flex justify-between">
            <div className="mt-4 m-4 flex items-start flex-col justify-center">
              <p className="uppercase text-center tracking-wide text-xs">
                Reviews
              </p>
              <img src={require("../../assets/images/stars.png")} />
            </div>

            <div className="text-left m-4 text-white uppercase tracking-wide">
              £<span className="text-4xl font-bold">50</span> per room
            </div>
          </div>
          {/* Slideshow */}
          <Modal
            isOpen={isOpen}
            onRequestClose={handleClick}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
          >
            <CarouselProvider
              currentSlide={currentSlide}
              totalSlides={props.images.length + 1}
              naturalSlideHeight={0}
              naturalSlideWidth={0}
            >
              <Slider>
                {props.images.map((img) => (
                  <Slide index={img.position}>{img.media}</Slide>
                ))}
                <p className="tracking-widest m-4 rounded-lg text-sm absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 px-2 py-1">
                  {currentSlide + 1}/{props.images.length}
                </p>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </Slider>
            </CarouselProvider>
          </Modal>

          {/* Portfolio Images */}
          <div className="">
            <h2 className="p-4">My portfolio</h2>
            <div className="md:hidden relative h-full w-full shadow-lg">
              {props.images[0].media}

              <p className="tracking-widest m-4 rounded-lg text-sm absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 px-2 py-1">
                1/{props.images.length}
              </p>
            </div>

            <div className="hidden md:grid grid-cols-4 px-2">
              <img
                onClick={handleClick}
                className="pr-2 h-full w-full rounded-tl-lg rounded-bl-lg col-start-1 col-end-3 hover:opacity-75 cursor-pointer"
                src={require("../../assets/images/" + "test-2.png")}
              />

              <div className="grid grid-row-2 pr-2">
                <img
                  className="pb-1"
                  src={require("../../assets/images/b.webp")}
                />
                <img
                  className="pt-1 "
                  src={require("../../assets/images/c.webp")}
                />
              </div>

              <div className="pr-2">
                <img
                  className="pb-1 rounded-tr-lg w-full"
                  src={require("../../assets/images/a.webp")}
                />
                <img
                  className="pt-1 rounded-br-lg w-full"
                  src={require("../../assets/images/b.webp")}
                />
              </div>
            </div>
            <div className="flex justify-between p-4 text-center tracking-widest">
              <div>
                <h6 className="text-left">Location</h6>
                <p className="font-bold text-xl">Glenroths</p>
              </div>
              <div>
                <h6 className="text-left">we charged</h6>
                <p className="text-sm font-bold">
                  £<span className="text-2xl">300</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-roboto text-lg text-yellow-500">
                Painting & Plastering
              </h2>
              <p className="mb-4 text-base font-thin px-6">
                Are you wondering what a half-house “paint-over” will cost?
              </p>
            </div>
            <div className="bg-white flex justify-between p-4">
              <div>
                <h6>project requirement</h6>
                <p className="text-xl font-bold" style={{ color: "#4267B2" }}>
                  Paint 5 Rooms
                </p>
              </div>
              <div>
                <h6>total sqft</h6>
                <p className="text-xl font-bold" style={{ color: "#4267B2" }}>
                  500 <span className="text-base">sqft</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
