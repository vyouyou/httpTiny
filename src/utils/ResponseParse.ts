import ABaseParese from "./ABaseParse";

export default class ResponseParse extends ABaseParese {
    constructor(str:String){
        super(str);
    }


    parseHeadLine(item:String) {
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