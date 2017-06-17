const Mock = require('mockjs');
const Random = Mock.Random;

export const comment = [{
  path: '/comment',
  type: 'get',
  data() {
    let result = {
      type: 'success',
    };

    let data = [];

    // 自动生成作者信息
    for (let i = 1; i <= 5; i++) {
      let comment = {
        avatar: `/static/image/jian-re-writer/writer-${Random.natural(1,17)}.jpg`,
        name: Random.cname(),
        passage: Random.ctitle(),
        datetime: Random.datetime('yyyy.MM.dd HH:mm'),
        at: Random.cname(),
        comment: Random.cparagraph()
      }

      data.push(comment);
    }

    result.data = data;

    return result;
  }
}]
