import ABaseParese from "./ABaseParse";

export default class ResponseParse extends ABaseParese {
    constructor(str:string){
        super(str);
    }


    parseHeadLine(item:string) {
        item.split(" ").forEach((value,index)=>{
            if(index === 0){
                this.headLine["http-version"] = value;
            }
            if(index === 1){
                this.headLine["state"] = value;
            }
            if(index === 2){
                this.headLine["state-message"] = value;
            }
        });
    }
}