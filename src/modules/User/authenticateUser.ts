import { compare } from "bcrypt";
import { AppError } from "@errors/AppError";
import { sign } from "jsonwebtoken";
import { Response, Request } from "express";
import { UserToken } from "@src/entity/User/InterfaceUser";
import { RepositoryUser } from "@src/entity/User/RepositoryUser";

class AuthenticaUser{

    async execute(request:Request, response:Response):Promise<Response>{

        const userRespository = new RepositoryUser();
        const {userName, password} = request.body;

        const user = await userRespository.findByUserName(userName);

        if(!user){
            throw new AppError("User or password incorrect.")
        }

        const passwordMatch = await compare(password, user.password);


        if(!passwordMatch){
            throw new AppError("User or password incorrect.")
        }

        const token = sign({}, "brasil123", {
            subject: user.id,
            expiresIn: "10h"            
        })

        const resp: UserToken = {
            user:{
                userName: user.userName,
            },
            token: token,
        };
       
        return response.status(200).json(resp);

    }
}

export {AuthenticaUser}