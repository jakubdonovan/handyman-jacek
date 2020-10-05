import { gql } from "@apollo/client";

export const PROJECT_DATA_FRAGMENT = gql`
  fragment ProjectData on SectionProjects {
    title
    description
    location
    amount
    requirement
    sqft
    images {
      filename
      alt
      position
    }
  }
`;
