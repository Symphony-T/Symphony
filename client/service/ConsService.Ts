import http from '../service/http-common'

class ConsService{
    create(data:any):Promise<any>{
        return http.post('/cons',data);
    }
    read(data:any):Promise<any>{
        return http.get('/cons',data);
    }
    addConservatory(data:any): Promise<any>{
        return http.post("/conservatory",data)
    }
    async getConservatory(data:any): Promise<any>{
        return await http.get("/conservatory",data)
    }
}


export default new ConsService();