const path = require("path"); //引入json-server
const jsonserver = require("json-server"); //实例化  
const jserver = jsonserver.create();
const jrouter = jsonserver.router(path.join(__dirname, "db.json")); //创建路由 
const middlewares = jsonserver.defaults(); //中间件

//nodejs的思路，每次请求服务器是，都会执行middlewares中间件  
jserver.use(middlewares);
//路由，会根据请求，找对应的数据，如：books或者readers  
jserver.use(jrouter);
//启动服务器  
jserver.listen(3000, () => {
    console.log("json-server running in 3000");
});