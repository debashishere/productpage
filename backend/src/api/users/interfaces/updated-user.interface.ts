import { IUpdatedResult } from "../../../shared/interfaces/updated.result.inetface";

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