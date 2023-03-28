import { authFetch, ENV } from "@/utils";

export class User {
    async getMe(){
        try{
        
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`
            const response = await authFetch(url);
            console.log(response)
            const result = await response.json();

            if( response.status != 200 ) throw result;

            return result;
            
        }catch(e){
            throw e;
        }
    }
}