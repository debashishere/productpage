import { ObjectLiteral } from "typeorm";

export class IUpdatedResult {
  generatedMaps: ObjectLiteral[]
  affected?: number

  constructor(generatedMaps: ObjectLiteral[], affected?: number) {
    this.generatedMaps = generatedMaps;
    this.affected = affected;
  }
}

