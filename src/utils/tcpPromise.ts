import {Socket} from "net";
import { parseUrl } from "../utils/net";

let client:Socket = null;

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