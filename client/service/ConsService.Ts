import http from '../service/http-common'

class ConsService{
    create(data:any):Promise<any>{
        return http.post('/cons',data);
    }
    addConservatory(data:any): Promise<any>{
        return http.post("/cons",data)
    }
    async getConservatory(data:any): Promise<any>{
        return await http.get("/cons",data)
    }
}


export default new ConsService();