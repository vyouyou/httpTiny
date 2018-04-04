const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const home = new Router();
const {ClientResponse} = require("http");

const main = ctx =>{
    ctx.response.body = "你说啥杰宝玩意";
};


// app.use(main);

home.get("/hello",async (ctx)=>{
    ctx.body = "hello";
});

const router = new Router();

router.use("/111",home.routes(),home.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);
