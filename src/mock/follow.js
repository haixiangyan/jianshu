const Mock = require('mockjs');
const Random = Mock.Random;

export const follow = [{
    path: '/follow',
    type: 'get',
    data() {
      let result = {
        type: 'success',
      };

      let data = [];

      // 自动生成作者信息
      for (let i = 1; i <= 9; i++) {
        let follow = {
          avatar: `/static/image/jian-re-writer/writer-${Random.natural(1,17)}.jpg`,
          name: Random.cname(),
          passage: Random.ctitle(),
          datetime: Random.datetime('MM.dd HH:mm'),
        }

        data.push(follow);
      }

      result.data = data;

      return result;
    }
  },
  {
    path: '/follow/topics',
    type: 'get',
    data() {
      let result = {
        type: 'success',
      };

      let data = [];

      // 自动生成作者信息
      for (let i = 1; i <= 14; i++) {
        let follow = {
          avatar: `/static/image/jian-re-writer/writer-${i}.jpg`,
          name: Random.cname(),
          route: '/follow/topic/'+i,
          type: 'all ' + Random.natural(2, 5)
        }

        data.push(follow);
      }

      result.data = data;

      return result;
    }
  },
]
