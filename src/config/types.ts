export interface Header {
    // common
    "Connection"?: string,
    "Keep-Alive"?: {
        max: number,
        timeout: number,
    },

    //"no-store"|"no-cache"|"must-revalidate"|"max-age"|"max-table"|"min-fresh"|"max-age"|"no-cache"|"no-store"|"only-if-cached"
    "Cache-Control"?: string,
    //client
    "User-Agent"?: string,
    "Date"?: string,
    "Accept"?: string,
    "Accept-Encoding"?: string,
    "Accept-Language"?: string,
    "Accept-Charest"?: string,
    "Cookie"?: "string",
    "Authorizatioin"?: string,
    "If-Modefied-Since"?: string,
    "If-None-Tag"?: string,
    "Etag"?: string,
    "Max-Forward"?: number,
    "Proxy-Authorization"?: string,
    "Authorization"?: string
    //Server
    "Age"?: number,
    "Pulbic"?: string,
    "Retry-After"?: string,
    "Server"?: string,
    "Title"?: string,
    "Warning"?: string,
    "Accept-Ranges"?: string,
    "Set-Cookie"?: string,
    //entity
    "Allow"?: string,
    "Location"?: string,
    //基础url
    "Content-Base"?: string,
    "Content-Encoding"?: string,
    "Content-Language"?: string,
    "Content-Length"?: Number,
    "Content-Location"?: string,
    "Content-MD5"?: string,
    "Content-Range"?: string,
    "Content-Type"?: string
};

export interface IRequest{
    url:string,
    method:"get" | "post" | "delete" | "put" | "options" | "headers" | "trace",
    header?:Header,
    path?:string,
    data?:string
}

