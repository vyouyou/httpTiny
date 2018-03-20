abstract class ABaseParse{
    protected str:String = "";
    protected array:Array<String> = [];
    headLine:{} = {};
    header:{} = {};
    data:{} = {};


    constructor(str:String){
        this.str = str;
        this.array = this.str.split("\r\n");
        this.startParse();
    }

    startParse():void{
        let isHeader = true;
        const headers:Array<String> = [];
        const datas:Array<String> = [];
        this.array.forEach((item,index)=>{
            if(index===0){
                this.parseHeadLine(item)
            }else{
                if(item === ""){
                    isHeader = false;
                }else if(isHeader){
                    headers.push(item);
                }else if(!isHeader){
                    datas.push(item);
                }
            }
        });
        this.parseHeader(headers);
        this.parseData(datas);
    }

    abstract parseHeadLine(item:String):void;

    parseHeader(items:Array<String>){
        items.forEach((item)=>{
            this.header[item.split(": ")[0]] = item.split(": ")[1];
        });
    }

    parseData(items:Array<String>){
        
    };
}

export default ABaseParse;