export interface Header {
    // common
    "Connection"?: String,
    "Keep-Alive"?: {
        max: number,
        timeout: number,
    },

    //"no-store"|"no-cache"|"must-revalidate"|"max-age"|"max-table"|"min-fresh"|"max-age"|"no-cache"|"no-store"|"only-if-cached"
    "Cache-Control"?: String,
    //client
    "User-Agent"?: String,
    "Date"?: String,
    "Accept"?: String,
    "Accept-Encoding"?: String,
    "Accept-Language"?: String,
    "Accept-Charest"?: String,
    "Cookie"?: "String",
    "Authorizatioin"?: String,
    "If-Modefied-Since"?: String,
    "If-None-Tag"?: String,
    "Etag"?: String,
    "Max-Forward"?: number,
    "Proxy-Authorization"?: String,
    "Authorization"?: String
    //Server
    "Age"?: number,
    "Pulbic"?: String,
    "Retry-After"?: String,
    "Server"?: String,
    "Title"?: String,
    "Warning"?: String,
    "Accept-Ranges"?: String,
    "Set-Cookie"?: String,
    //entity
    "Allow"?: String,
    "Location"?: String,
    //基础url
    "Content-Base"?: String,
    "Content-Encoding"?: String,
    "Content-Language"?: String,
    "Content-Length"?: Number,
    "Content-Location"?: String,
    "Content-MD5"?: String,
    "Content-Range"?: String,
    "Content-Type"?: String
};

