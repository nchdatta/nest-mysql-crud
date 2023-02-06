import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

export class UserRepo extends Repository<User>{

}