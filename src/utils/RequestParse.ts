import ABaseParese from "./ABaseParse";

class RequestParse extends ABaseParese {
    protected str: string;
    protected array: string[];
    headLine: {};
    header: {};
    data: string;

    constructor(str:string){
        super(str);
    }

    parseHeadLine(item: string) {
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