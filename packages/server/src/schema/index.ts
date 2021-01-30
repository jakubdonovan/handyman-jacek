import { schemaComposer } from "graphql-compose";
import { composeMongoose } from "graphql-compose-mongoose";
import { SectionModel } from "../models";
import ImageModel from "../models/Section/Project/image";

// Section resolvers
const SectionTC = composeMongoose(SectionModel as any);
const ImageTC = composeMongoose(ImageModel);

schemaComposer.Query.addFields({
  sectionById: SectionTC.mongooseResolvers.findById(),
  sectionByIds: SectionTC.mongooseResolvers.findByIds(),
  sectionOne: SectionTC.mongooseResolvers.findOne(),
  sectionMany: SectionTC.mongooseResolvers.findMany(),
  sectionDataLoader: SectionTC.mongooseResolvers.dataLoader(),
  sectionDataLoaderMany: SectionTC.mongooseResolvers.dataLoaderMany(),
  sectionCount: SectionTC.mongooseResolvers.count(),
  sectionConnection: SectionTC.mongooseResolvers.connection(),
  sectionPagination: SectionTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  sectionCreateOne: SectionTC.mongooseResolvers.createOne(),
  sectionCreateMany: SectionTC.mongooseResolvers.createMany(),
  sectionUpdateById: SectionTC.mongooseResolvers.updateById(),
  sectionUpdateOne: SectionTC.mongooseResolvers.updateOne(),
  sectionUpdateMany: SectionTC.mongooseResolvers.updateMany(),
  sectionRemoveById: SectionTC.mongooseResolvers.removeById(),
  sectionRemoveOne: SectionTC.mongooseResolvers.removeOne(),
  sectionRemoveMany: SectionTC.mongooseResolvers.removeMany(),
});

schemaComposer.Mutation.addFields({
  imageUpdateById: ImageTC.mongooseResolvers.updateById(),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;
