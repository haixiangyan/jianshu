const Mock = require('mockjs');
const Random = Mock.Random;

export const other = [{
  path: '/other',
  type: 'get',
  data() {
    let result = {
      type: 'success',
    };

    let data = [];
    let types = ['success', 'fail', 'subscribe']

    // 自动生成作者信息
    for (let i = 1; i <= 9; i++) {
      let other = {
        avatar: `/static/image/jian-re-writer/writer-${Random.natural(1,17)}.jpg`,
        name: Random.cname(),
        passage: Random.ctitle(3, 8),
        datetime: Random.datetime('MM.dd HH:mm'),
        topic: Random.ctitle(3, 8),
        type: types[Random.natural(0, 2)]
      }
      
      data.push(other);
    }

    result.data = data;

    return result;
  }
}]
