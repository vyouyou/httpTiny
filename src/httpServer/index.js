const Koa = require("koa");
const app = new Koa();
const {ClientResponse} = require("http");

const main = ctx =>{
    ctx.response.body = "你说啥杰宝玩意";
};

app.use(main);

app.listen(3000);
