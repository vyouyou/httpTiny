import {Socket} from "net";

let client:Socket;

const tcpPromise = async (url:string,data:string)=>{
    if(!client) client = new Socket();

    return new Promise((resolve,reject)=>{
        client.addListener("data",(data)=>{
            resolve(data.toString());
        });

        client.addListener("error",(err)=>{
            reject(err);
        });

        client.connect(3000,url,()=>{
            client.write(data);
        });
    });
}

export default tcpPromise;