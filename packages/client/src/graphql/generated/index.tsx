import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
};


export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  sectionById?: Maybe<Section>;
  sectionByIds: Array<Section>;
  sectionOne?: Maybe<Section>;
  sectionMany: Array<Section>;
  sectionDataLoader?: Maybe<Section>;
  sectionDataLoaderMany: Array<Maybe<Section>>;
  sectionCount?: Maybe<Scalars['Int']>;
  sectionConnection?: Maybe<SectionConnection>;
  sectionPagination?: Maybe<SectionPagination>;
};


export type QuerySectionByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QuerySectionByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsSectionInput>;
};


export type QuerySectionOneArgs = {
  filter?: Maybe<FilterFindOneSectionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSectionInput>;
};


export type QuerySectionManyArgs = {
  filter?: Maybe<FilterFindManySectionInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySectionInput>;
};


export type QuerySectionDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QuerySectionDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QuerySectionCountArgs = {
  filter?: Maybe<FilterCountSectionInput>;
};


export type QuerySectionConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManySectionInput>;
  sort?: Maybe<SortConnectionSectionEnum>;
};


export type QuerySectionPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManySectionInput>;
  sort?: Maybe<SortFindManySectionInput>;
};

export type Section = {
  __typename?: 'Section';
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  amount: Scalars['Float'];
  position: Scalars['Float'];
  image: SectionImage;
  projects: Array<Maybe<SectionProjects>>;
  bgColor: Scalars['JSON'];
  _id: Scalars['MongoID'];
};

export type SectionImage = {
  __typename?: 'SectionImage';
  filename: Scalars['String'];
  alt: Scalars['String'];
  position: Scalars['Float'];
  _id?: Maybe<Scalars['MongoID']>;
};


export type SectionProjects = {
  __typename?: 'SectionProjects';
  title: Scalars['String'];
  description: Scalars['String'];
  location: Scalars['String'];
  amount: Scalars['Float'];
  requirement: Scalars['String'];
  sqft: Scalars['Float'];
  images: Array<Maybe<SectionProjectsImages>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SectionProjectsImages = {
  __typename?: 'SectionProjectsImages';
  filename: Scalars['String'];
  alt: Scalars['String'];
  position: Scalars['Float'];
  _id?: Maybe<Scalars['MongoID']>;
};

export enum SortFindByIdsSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterFindOneSectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterFindOneSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSectionInput>>;
  AND?: Maybe<Array<FilterFindOneSectionInput>>;
};

export type FilterFindOneSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterFindOneSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOneSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSectionOperatorsInput = {
  _id?: Maybe<FilterFindOneSection_IdOperatorsInput>;
};

export type FilterFindOneSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManySectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterFindManySectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterFindManySectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySectionInput>>;
  AND?: Maybe<Array<FilterFindManySectionInput>>;
};

export type FilterFindManySectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterFindManySectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManySectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySectionOperatorsInput = {
  _id?: Maybe<FilterFindManySection_IdOperatorsInput>;
};

export type FilterFindManySection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManySectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterCountSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterCountSectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterCountSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountSectionOperatorsInput>;
  OR?: Maybe<Array<FilterCountSectionInput>>;
  AND?: Maybe<Array<FilterCountSectionInput>>;
};

export type FilterCountSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterCountSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterCountSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterCountSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountSectionOperatorsInput = {
  _id?: Maybe<FilterCountSection_IdOperatorsInput>;
};

export type FilterCountSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type SectionConnection = {
  __typename?: 'SectionConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<SectionEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type SectionEdge = {
  __typename?: 'SectionEdge';
  /** The item at the end of the edge */
  node: Section;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionSectionEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type SectionPagination = {
  __typename?: 'SectionPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Section>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  sectionCreateOne?: Maybe<CreateOneSectionPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  sectionCreateMany?: Maybe<CreateManySectionPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  sectionUpdateById?: Maybe<UpdateByIdSectionPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  sectionUpdateOne?: Maybe<UpdateOneSectionPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  sectionUpdateMany?: Maybe<UpdateManySectionPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  sectionRemoveById?: Maybe<RemoveByIdSectionPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  sectionRemoveOne?: Maybe<RemoveOneSectionPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  sectionRemoveMany?: Maybe<RemoveManySectionPayload>;
};


export type MutationSectionCreateOneArgs = {
  record: CreateOneSectionInput;
};


export type MutationSectionCreateManyArgs = {
  records: Array<CreateManySectionInput>;
};


export type MutationSectionUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdSectionInput;
};


export type MutationSectionUpdateOneArgs = {
  record: UpdateOneSectionInput;
  filter?: Maybe<FilterUpdateOneSectionInput>;
  sort?: Maybe<SortUpdateOneSectionInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationSectionUpdateManyArgs = {
  record: UpdateManySectionInput;
  filter?: Maybe<FilterUpdateManySectionInput>;
  sort?: Maybe<SortUpdateManySectionInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationSectionRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationSectionRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneSectionInput>;
  sort?: Maybe<SortRemoveOneSectionInput>;
};


export type MutationSectionRemoveManyArgs = {
  filter: FilterRemoveManySectionInput;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateOneSectionPayload = {
  __typename?: 'CreateOneSectionPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Section>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneSectionInput = {
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  amount: Scalars['Float'];
  position: Scalars['Float'];
  image: SectionImageInput;
  projects: Array<Maybe<SectionProjectsInput>>;
  bgColor: Scalars['JSON'];
};

export type SectionImageInput = {
  filename: Scalars['String'];
  alt: Scalars['String'];
  position: Scalars['Float'];
  _id?: Maybe<Scalars['MongoID']>;
};

export type SectionProjectsInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  location: Scalars['String'];
  amount: Scalars['Float'];
  requirement: Scalars['String'];
  sqft: Scalars['Float'];
  images: Array<Maybe<SectionProjectsImagesInput>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type SectionProjectsImagesInput = {
  filename: Scalars['String'];
  alt: Scalars['String'];
  position: Scalars['Float'];
  _id?: Maybe<Scalars['MongoID']>;
};

export type CreateManySectionPayload = {
  __typename?: 'CreateManySectionPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Section>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManySectionInput = {
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  amount: Scalars['Float'];
  position: Scalars['Float'];
  image: SectionImageInput;
  projects: Array<Maybe<SectionProjectsInput>>;
  bgColor: Scalars['JSON'];
};

export type UpdateByIdSectionPayload = {
  __typename?: 'UpdateByIdSectionPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Section>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<UpdateByIdSectionImageInput>;
  projects?: Maybe<Array<Maybe<UpdateByIdSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
};

export type UpdateByIdSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<UpdateByIdSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneSectionPayload = {
  __typename?: 'UpdateOneSectionPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Section>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<UpdateOneSectionImageInput>;
  projects?: Maybe<Array<Maybe<UpdateOneSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
};

export type UpdateOneSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<UpdateOneSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateOneSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterUpdateOneSectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterUpdateOneSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneSectionOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneSectionInput>>;
  AND?: Maybe<Array<FilterUpdateOneSectionInput>>;
};

export type FilterUpdateOneSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateOneSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterUpdateOneSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateOneSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSectionOperatorsInput = {
  _id?: Maybe<FilterUpdateOneSection_IdOperatorsInput>;
};

export type FilterUpdateOneSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateManySectionPayload = {
  __typename?: 'UpdateManySectionPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManySectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<UpdateManySectionImageInput>;
  projects?: Maybe<Array<Maybe<UpdateManySectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
};

export type UpdateManySectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateManySectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<UpdateManySectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateManySectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateManySectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterUpdateManySectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterUpdateManySectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManySectionOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManySectionInput>>;
  AND?: Maybe<Array<FilterUpdateManySectionInput>>;
};

export type FilterUpdateManySectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateManySectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterUpdateManySectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateManySectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManySectionOperatorsInput = {
  _id?: Maybe<FilterUpdateManySection_IdOperatorsInput>;
};

export type FilterUpdateManySection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManySectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveByIdSectionPayload = {
  __typename?: 'RemoveByIdSectionPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Section>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneSectionPayload = {
  __typename?: 'RemoveOneSectionPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Section>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneSectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterRemoveOneSectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterRemoveOneSectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneSectionOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneSectionInput>>;
  AND?: Maybe<Array<FilterRemoveOneSectionInput>>;
};

export type FilterRemoveOneSectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterRemoveOneSectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterRemoveOneSectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterRemoveOneSectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSectionOperatorsInput = {
  _id?: Maybe<FilterRemoveOneSection_IdOperatorsInput>;
};

export type FilterRemoveOneSection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneSectionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveManySectionPayload = {
  __typename?: 'RemoveManySectionPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManySectionInput = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  image?: Maybe<FilterRemoveManySectionImageInput>;
  projects?: Maybe<Array<Maybe<FilterRemoveManySectionProjectsInput>>>;
  bgColor?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManySectionOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManySectionInput>>;
  AND?: Maybe<Array<FilterRemoveManySectionInput>>;
};

export type FilterRemoveManySectionImageInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterRemoveManySectionProjectsInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  requirement?: Maybe<Scalars['String']>;
  sqft?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<FilterRemoveManySectionProjectsImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterRemoveManySectionProjectsImagesInput = {
  filename?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManySectionOperatorsInput = {
  _id?: Maybe<FilterRemoveManySection_IdOperatorsInput>;
};

export type FilterRemoveManySection_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type ProjectDataFragment = (
  { __typename?: 'SectionProjects' }
  & Pick<SectionProjects, 'title' | 'description' | 'location' | 'amount' | 'requirement' | 'sqft'>
  & { images: Array<Maybe<(
    { __typename?: 'SectionProjectsImages' }
    & Pick<SectionProjectsImages, 'filename' | 'alt' | 'position'>
  )>> }
);

export type SectionDataFragment = (
  { __typename?: 'Section' }
  & Pick<Section, 'title' | 'shortDescription' | 'longDescription' | 'amount' | 'position' | 'bgColor'>
  & { image: (
    { __typename?: 'SectionImage' }
    & Pick<SectionImage, 'filename' | 'alt' | 'position'>
  ), projects: Array<Maybe<(
    { __typename?: 'SectionProjects' }
    & ProjectDataFragment
  )>> }
);

export type SectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SectionsQuery = (
  { __typename?: 'Query' }
  & { sectionMany: Array<(
    { __typename?: 'Section' }
    & SectionDataFragment
  )> }
);

export const ProjectDataFragmentDoc = gql`
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
export const SectionDataFragmentDoc = gql`
    fragment SectionData on Section {
  title
  shortDescription
  longDescription
  amount
  position
  bgColor
  image {
    filename
    alt
    position
  }
  projects {
    ...ProjectData
  }
}
    ${ProjectDataFragmentDoc}`;
export const SectionsDocument = gql`
    query sections {
  sectionMany {
    ...SectionData
  }
}
    ${SectionDataFragmentDoc}`;

/**
 * __useSectionsQuery__
 *
 * To run a query within a React component, call `useSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSectionsQuery(baseOptions?: Apollo.QueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
        return Apollo.useQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, baseOptions);
      }
export function useSectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionsQuery, SectionsQueryVariables>) {
          return Apollo.useLazyQuery<SectionsQuery, SectionsQueryVariables>(SectionsDocument, baseOptions);
        }
export type SectionsQueryHookResult = ReturnType<typeof useSectionsQuery>;
export type SectionsLazyQueryHookResult = ReturnType<typeof useSectionsLazyQuery>;
export type SectionsQueryResult = Apollo.QueryResult<SectionsQuery, SectionsQueryVariables>;