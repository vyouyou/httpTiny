import Client from "../src/client/Client";
import ResponseParse from "../src/utils/ResponseParse";
import {genBaseRequest} from "../src/utils/ABaseGen";

const httpClient = new Client("www.qq.com");


test("test http client",()=>{
    const str = genBaseRequest("get","/","www.qq.com",{},"");
    httpClient.sendData(str)
    .then((res)=>{
        console.log("res",httpClient.genHost);
        expect(res).toBe(Object);
    })
    .catch(err=>{
        console.log("err",err);
    })
    
})
