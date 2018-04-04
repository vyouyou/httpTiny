import Client from "../src/client/Client";
import ResponseParse from "../src/utils/ResponseParse";
import {genBaseRequest} from "../src/utils/ABaseGen";

const httpClient = new Client("localhost");


test("test http client",()=>{
    const str = genBaseRequest("get","/111/hello","localhost",{},"");
    httpClient.sendData(str)
    .then((res)=>{
        console.log("res",res);
        expect(res).toBe(Object);
    })
    .catch(err=>{
        console.log("err",err);
    })
    
})
