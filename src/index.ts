import tcpPromise from "./utils/tcpPromise";
import {formatData} from "./utils/net";
import ResponseParse from "./utils/ResponseParse";

const array = []

export const clientRequest = async (
    url: string,
    method: "get" | "post" | "delete" | "put" | "options" | "headers" | "trace",
) => {
    try{
        const response = await tcpPromise(url,formatData(method));
        return new ResponseParse(response as String);
    }catch(err){
        throw err;
    }
}
