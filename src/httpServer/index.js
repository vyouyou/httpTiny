const Koa = require("koa");
const app = new Koa();

const main = ctx =>{
    console.log("lalala");
    ctx.response.body = "你说啥杰宝玩意";
};

app.use(main);

app.listen(3000);
