exports.info = async ctx => {
    ctx.body = `user name = ${ ctx.query.name } ${JSON.stringify(ctx.queries)}`
}
