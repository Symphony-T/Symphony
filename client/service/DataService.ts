import http from '../service/http-common'

class DataService {
    create(data:any): Promise<any> {
        return http.post("/signup", data);
    }
    async access(credentials: any): Promise<any> {
        return await http.post("/login", credentials).then((res)=>{
            res.data
        })
    }
    addPiano(data:any): Promise<any>{
        return http.post("/piano",data)
    }
    async getPiano(data:any): Promise<any>{
        return await http.get("/piano",data)
    }
    addSheet(data:any): Promise<any>{
        return http.post("/beginner",data)
    }
    async getSheet(data:any): Promise<any>{
        return await http.get("/beginner",data)
    }
    // addSheet(data:any): Promise<any>{
    //     return http.post("/intermediate",data)
    // }
    // async getSheet(data:any): Promise<any>{
    //     return await http.get("/intermediate",data)
    // }
   async updatePassword(data:any):Promise<any>{
    return await http.put("/newpassword",data)
}
async forgetPassword(data:any):Promise<any>{
    return await http.post("/forgetpassword",data)
}
}
export default new DataService();