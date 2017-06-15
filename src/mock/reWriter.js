const Mock = require('mockjs');
const Random = Mock.Random;

export const reWriter = [{
  path: '/re-writer',
  type: 'get',
  data() {
    let result = {
      type: 'success',
    };

    let data = [];

    // 自动生成作者信息
    for (let i = 1; i <= 17; i++) {
      let writer = {
        src: `/static/image/jian-re-writer/writer-${i}.jpg`,
        name: Random.cname(),
        words: Random.integer( 500, 50000 ),
        love: Random.integer( 600, 40000 )
      }
      
        data.push(writer);
    }

    result.data = data;

    return result;
  }
}]
