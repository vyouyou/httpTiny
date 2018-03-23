import Client from "../src/client/Client";
import ResponseParse from "../src/utils/ResponseParse";

const httpClient = new Client("127.0.0.1");

test("test http client",()=>{
    httpClient.sendData("GET /aaa HTTP/1.1\n\n")
    .then((res)=>{
        expect(res).toBe(Object);
    })
    .catch(err=>{
        console.log("err",err);
    })
    
})
