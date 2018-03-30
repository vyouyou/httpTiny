abstract class ABaseParse{
    protected str:string = "";
    headLine:{} = {};
    header:{} = {};
    data:string = "";


    constructor(str:string){
        this.str = str;
        this.startParse();
    }

    startParse():void{
        // 切割首部行
        const headLineMark = this.str.search(/\r\n/);
        this.parseHeadLine(this.str.slice(0,headLineMark));
        this.str = this.str.substr(headLineMark + 2);
        // 切割首部
        const headMark = this.str.search(/\r\n\r\n/);
        this.parseHeader(this.str.slice(0,headMark));
        this.str = this.str.substr(headMark + 4);
        // 处理body
        this.parseData(this.str);
    }

    abstract parseHeadLine(item:string):void;

    parseHeader(str:string){
        str.split("\n\r").forEach((item)=>{
            this.header[item.split(": ")[0]] = item.split(": ")[1];
        });
    }

    parseData(str:string){
        this.data = str;
    };

    getHeadLine():{}{
        return this.headLine;
    }

    getHeader():{}{
        return this.header;
    }

    getData():string{
        return this.data;
    }
}

export default ABaseParse;