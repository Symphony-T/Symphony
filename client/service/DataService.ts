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
    addSheets(data:any): Promise<any>{
        return http.post("/intermediate",data)
    }
    async getSheets(data:any): Promise<any>{
        return await http.get("/intermediate",data)
    }
    addSheetMas(data:any): Promise<any>{
        return http.post("/expert",data)
    }
    async getSheetMas(data:any): Promise<any>{
        return await http.get("/expert",data)
    }
    addSheeth(data:any): Promise<any>{
        return http.post("/home",data)
    }
    async getSheeth(data:any): Promise<any>{
        return await http.get("/home",data)
    }
    
}

export default new DataService();