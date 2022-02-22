import { IUpdatedResult } from "../../../shared/classes/updated.result.inetface";

export interface IUpdatedUser extends IUpdatedResult {
  row?: IUserResponse[]
}

interface IUserResponse {
  id?: string,
  name: string,
  email: string,
  bio?: string,
  image?: string
}