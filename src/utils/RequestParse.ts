import ABaseParese from "./ABaseParse";

class RequestParse extends ABaseParese {
    protected str: String;
    protected array: String[];
    headLine: {};
    header: {};
    data: String;

    constructor(str:String){
        super(str);
    }

    parseHeadLine(item: String) {
        item.split(" ").forEach((value,index)=>{
            if(index === 0){
                this.headLine["method"] = value;
            }
            if(index === 1){
                this.headLine["path"] = value;
            }
            if(index === 2){
                this.headLine["http-version"] = value;
            }
        });
    }
}

export default RequestParse;