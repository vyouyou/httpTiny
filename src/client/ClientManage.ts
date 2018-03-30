import { IRequest } from "../config/types";
import { genBaseRequest} from "../utils/ABaseGen";
import Client from "./Client";

export default class ClientManage{
    client:Client;

    constructor(){

    }

    public request(params:IRequest){
        this.client = new Client(params.url);
        const str = genBaseRequest(params.method,
            params.path?params.path:"",
            params.url,
            params.header?params.header:{},
            params.data?params.data:"");
        return str;
    }
}