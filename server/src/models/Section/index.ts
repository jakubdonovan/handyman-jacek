import { getModelForClass, prop } from "@typegoose/typegoose";
import { Project } from "./Project";
import { Image } from "./Project/image";

class Section {
  @prop({ required: true })
  public title!: string;
  @prop({ required: true })
  public shortDescription!: string;
  @prop({ required: true })
  public longDescription!: string;
  @prop({ required: true })
  public amount!: number;
  @prop({ required: true })
  public position!: number;
  @prop({ required: true })
  public image!: Image;
  @prop({ required: true, type: () => [Project] })
  public projects!: Project[];
}

export default getModelForClass(Section);
