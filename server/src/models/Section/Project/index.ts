import { prop } from "@typegoose/typegoose";
import { Image } from "./image";

export class Project {
  @prop({ required: true })
  public title!: string;
  @prop({ required: true })
  public description!: string;
  @prop({ required: true })
  public location!: string;
  @prop({ required: true })
  public amount!: number;
  @prop({ required: true })
  public requirement!: string;
  @prop({ required: true })
  public sqft!: number;
  @prop({ required: true, type: () => [Image] })
  public images!: Image[];
}
