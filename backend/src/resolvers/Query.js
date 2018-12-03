const { forwardTo } = require('prisma-binding'); // 后端无需业务逻辑的查询，可以直接查询 prisma

const Query = {
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
