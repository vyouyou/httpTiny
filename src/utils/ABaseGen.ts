import { Header } from "../config/types";

abstract class ABaseGen {
    protected str: String = "";
    constructor(method: "get" | "post" | "delete" | "put" | "options" | "headers" | "trace", header: Header, ) {
        this.headLineGen();
        this.headerGen(header);
    }

    abstract headLineGen();

    headerGen(header: Header = {}) {
        const newHeader = Object.assign(header, {
            "Accept": "image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, " +
                "application/x-shockwave-flash, application/xaml+xml, application/vnd.ms-xpsdocument, " +
                "application/x-ms-xbap, application/x-ms-application, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, */*",
            "Accept-Language": "en-us,zh-cn;q=0.5",
            "Accept-Encoding": "gzip, deflate",
            "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"
        });
        for(const key in header){
            this.str += key + ": " + header[key + "\r\n"];
        }
        this.str +="\n";
    }

    getRequest

}