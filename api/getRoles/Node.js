module.exports = async function (context, req) {
  // とりあえず全員 Admin にする最小検証
  context.res = {
    status: 200,
    body: {
      roles: ["Admin"]
    }
  };
};
