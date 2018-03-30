import { SocketStates } from "../config/enums";
import { Socket } from "net";
import ResponseParse from "../utils/ResponseParse";

class Client {
    private socket: Socket;
    private cookie: string = "";
    private socketState: SocketStates;
    private host: string = "";
    private path: string = "";

    constructor(url: string) {
        this.socket = new Socket();
        this.genHost(url);
    }

    genHost(url: string):String {
        url.replace("http://", "");
        const hostIndex = url.search("/");
        if(hostIndex > 0){
            this.host = url.substr(0, hostIndex);
            this.path = url.substr(hostIndex + 1);
        }else{
            this.host = url;
            this.path = "";
        }
        return this.host;
    }


    sendData(str: string):Promise<Object> {
        if (this.socketState === SocketStates.CONNECTED) {
            this.socket.write(str);
        } else {
            this.openSocket(str);
        }
        return new Promise((resolve, reject) => {
            this.socket.addListener("close", (hadError) => {
                this.socketState = SocketStates.CLOSED;
            });

            this.socket.addListener("data", (buffer) => {
                resolve(new ResponseParse(buffer.toString()));
            });

            this.socket.addListener("error", (error) => {
                this.socketState = SocketStates.CLOSED;
                reject(error);
            });
        });
    }

    openSocket(str?: string) {
        this.socket.connect( 80, this.host , () => {
            this.socketState = SocketStates.CONNECTED;
            console.log("str",str);
            if (str) this.socket.write(str);
        });
    }

}

export default Client;