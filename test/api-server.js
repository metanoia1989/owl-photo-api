// 使用原生js来写api
// 添加微博，删除微博，微博列表，查询微博

require('dotenv').config({ path: __dirname+'/../.env' })

const db = require('./db')
const Posts = require('./models');
const logger = require('koa-logger');
const router = require('@koa/router')();
const koaBody = require('koa-body');
const Koa = require('koa');
const app = module.exports = new Koa();

app.use(logger());
app.use(koaBody());


router.get('/', list)
  .get('/post', list)
  .get('/post/:id', find)
  .delete('/post/:id', del)
  .post('/post', create);

app.use(router.routes());

function res(data = null, code = 0, msg = "success")
{
  var result = { code, msg }
  if (data) result.data = data
  return JSON.stringify(result)
}

/**
 * Post listing.
 */
async function list(ctx) {
  var posts = await Posts.findAll()
  console.log("数据啊", posts)
  ctx.set('Content-Type', 'application/json');
  ctx.body = res(posts)
}

/**
 * 删除一篇微博
 */
async function del(ctx) {
  const id = ctx.params.id;
  var where = { id }
  await WechatKeyword.destroy({ where })
  ctx.set('Content-Type', 'application/json');
  ctx.body = res()
}

/**
 * Show post :id.
 */
async function find(ctx) {
  const id = ctx.params.id;
  var data = await WechatKeyword.findByPk(id)
  ctx.set('Content-Type', 'application/json');
  ctx.body = res(data)
}

/**
 * Create a post.
 */

async function create(ctx) {
  const post = ctx.request.post;
  console.log("数据", post, ctx.request)
  var id = await Posts.create(post)
  ctx.set('Content-Type', 'application/json');
  ctx.body = res(id)
}

// listen

if (!module.parent) {
  var server = app.listen(3000, function (){
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
}
