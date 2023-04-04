import { authFetch, ENV } from "@/utils";

export class Gerencias{
    async register(data){
        console.log(data)
        try{
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GERENCIAS}`;
            const params = {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data),
            };
            const response = await authFetch(url, params);
            const result = await response.json();
            if(response.status !== 201 ) throw result;
            return result;
        }catch(error){
            throw error
        }
    }
}