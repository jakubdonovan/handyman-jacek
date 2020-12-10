import yn from "yn";

export const PRODUCTION = yn(process.env.PRODUCTION);
export const DOCKER = yn(process.env.DOCKER);
