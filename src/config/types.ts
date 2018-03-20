export interface IClientData  {
    query?:object,
    headers?:{
        // common
        Connection?:String,
        KeepAlive:{
            max:number,
            timeout:number,
        },
        Date:String,
        Accept:String,
        "Accept-Encoding":String,
        "Accept-Language":String,
        Cookie:String,

        //client
        "User-Agent":String
    },
    body?:object
}