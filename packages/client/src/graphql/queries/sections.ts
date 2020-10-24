import { gql } from "@apollo/client";
import { SECTION_DATA_FRAGMENT } from "../fragments/section";

export const GET_SECTIONS = gql`
  query sections {
    sectionMany {
      ...SectionData
    }
  }
  ${SECTION_DATA_FRAGMENT}
`;
