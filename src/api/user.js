import { authFetch, ENV } from "@/utils";
const jwt = require('jsonwebtoken');

export class User {
    async getMe(token_data){
        try{
            const token = token_data; 
            const decodedToken = jwt.decode(token);
            const data = decodedToken;
            return data.data;
        }catch(e){
            throw e;
        }
    }
}