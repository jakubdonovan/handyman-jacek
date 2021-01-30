import React from "react";
import {
  Component2,
  FlexWrapperOne,
  RelativeWrapperOne,
  FlexWrapperThree,
  Excellent,
  ExcellentTwo,
  FlexWrapperFour,
  FlexWrapperTwo,
  BasedOn267Reviews,
  BasedOn267ReviewsTwo,
  FlexWrapperFive,
} from "./style";

const ReviewCard = ({
  excellent = "Excellent",
  excellentTwo = "Excellent",
  basedOn267Reviews = "BASED ON 267 REVIEWS",
  basedOn267ReviewsTwo = "BASED ON 267 REVIEWS",
}) => {
  return (
    <Component2>
      <FlexWrapperOne>
        <RelativeWrapperOne>
          <FlexWrapperThree>
            <Excellent>{excellent}</Excellent>
            <ExcellentTwo>{excellentTwo}</ExcellentTwo>
          </FlexWrapperThree>
          <FlexWrapperFour />
        </RelativeWrapperOne>
        <FlexWrapperTwo>
          <BasedOn267Reviews>{basedOn267Reviews}</BasedOn267Reviews>
          <BasedOn267ReviewsTwo>{basedOn267ReviewsTwo}</BasedOn267ReviewsTwo>
        </FlexWrapperTwo>
      </FlexWrapperOne>
      <FlexWrapperFive />
    </Component2>
  );
};

export default ReviewCard;
