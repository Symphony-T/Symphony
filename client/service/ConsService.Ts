import http from '../service/http-common'

class ConsService{
    create(data:any):Promise<any>{
        return http.post('/cons',data);
    }
    read(data:any):Promise<any>{
        return http.get('/cons',data);
    }
}


export default new ConsService();