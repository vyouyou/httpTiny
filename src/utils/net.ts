import *as dns from "dns";
import net from "net";

export const parseUrl = function (url) {
    return new Promise((resolve, reject)=>{
        dns.lookup(url,(err,address,family)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(address);
        });
    })
}

// 首部行
const genPrimaryLine=function(method:string){
    return `${method.toUpperCase()} / HTTP/1.1\n`;
}



export const formatData = function (method) {
    return genPrimaryLine(method) + "\n";
}