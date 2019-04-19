exports.index = async ctx => {
    ctx.body = {'type':'get'}
};

exports.new = async ctx => {
    const userInfo = await ctx.service.user.find(`123`)
    ctx.body = {'type':userInfo}
};

exports.create = async () => {};

exports.show = async () => {};

exports.edit = async () => {};

exports.update = async () => {};

exports.destroy = async () => {};
