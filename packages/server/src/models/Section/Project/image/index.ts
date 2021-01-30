import { getModelForClass, prop } from "@typegoose/typegoose";

export class Image {
  @prop({ required: true })
  public filename!: string;
  @prop({ required: true })
  public alt!: string;
  @prop({ required: true })
  public position?: number;
}

const ImageModel = getModelForClass(Image);
export default ImageModel;
