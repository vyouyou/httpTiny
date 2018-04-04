import { Header } from "../config/types";

export function genBaseRequest(method: "get" | "post" | "delete" | "put" | "options" | "headers" | "trace",path:string,host:string, header: Header, data: string): string {
    let str = "";
    str += `${method.toUpperCase()} ${path} HTTP/1.1\n`;
    str = headerGen(str,host,header);
    return str;
}

export function genBaseResponse(method: "get" | "post" | "delete" | "put" | "options" | "headers" | "trace",path:string,host:string, header: Header, data: string): string {
    let str = "";
    str += `${method.toUpperCase()} ${path} HTTP/1.1\n`;
    str = headerGen(str,host,header);
    return str;
}


function headerGen(str:string,host:string,header: Header = {}) {
    const newHeader = Object.assign(header, {
        "Host":host,
        "Accept": "image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, " +
            "application/x-shockwave-flash, application/xaml+xml, application/vnd.ms-xpsdocument, " +
            "application/x-ms-xbap, application/x-ms-application, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, */*",
        "Accept-Language": "en-us,zh-cn;q=0.5",
        //暂不支持zip格式
        // "Accept-Encoding": "gzip, deflate",
        "Accept-Encoding":"identity",
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"
    });
    for (const key in newHeader) {
        str += key + ": " + newHeader[key]+ "\r\n";
    }
    str += "\n";
    return str;
}

