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
  public icon!: Image;
  @prop({ required: true })
  public amount!: number;
  @prop({ required: true })
  public position!: number;
  @prop({ required: true })
  public image!: Image;
  @prop({ required: true, type: [Project] })
  public projects!: Project[];
  @prop({ required: true })
  public bgColor!: string | number;
  @prop({ required: true })
  public light!: boolean;
}

export default getModelForClass(Section);
