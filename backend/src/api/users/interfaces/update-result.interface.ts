import { ObjectLiteral } from "typeorm";

export interface IUpdateResult {
  generatedMaps: ObjectLiteral[],
  raw: IUpdatedUser[],
  affected?: number
}


export interface IUpdatedUser {
  id?: string,
  name: string,
  email: string,
  bio?: string,
  image?: string
}