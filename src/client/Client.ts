import {SocketStates} from "../config/enums";
import {Socket} from "net";
import ResponseParse from "../utils/ResponseParse";

export class Client{
    private socket:Socket;
    private cookie:string = "";
    private socketState:SocketStates;
    private host:string = "";
    private path:string = "";
    private dataListener:(data:ResponseParse)=>{}

    constructor(url:string){
        this.socket = new Socket();
        this.genHost(url);
        this.initSocket();
        this.openSocket();
    }

    genHost(url:string){
        url.replace("http://","");
        const hostIndex = url.search("/");
        this.host = url.substr(0,hostIndex);
        this.path = url.substr(hostIndex+1);
    }

    initSocket(){
        this.socket.addListener("close",(hadError)=>{
            this.socketState = SocketStates.CLOSED;
        });

        this.socket.addListener("data",(buffer)=>{
            this.dataListener&&this.dataListener(new ResponseParse(buffer.toString()));
        });

        this.socket.addListener("error",(error)=>{
            this.socketState = SocketStates.CLOSED;
        });
    }

    openSocket(){
        this.socket.connect({port:80,host:this.host},()=>{
            this.socketState = SocketStates.CONNECTED;
        });
    }

    setDataListener(func:(data:ResponseParse)=>{}){
        this.dataListener = func;
    }

}