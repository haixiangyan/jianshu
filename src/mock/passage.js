const Mock = require('mockjs');
const Random = Mock.Random;

export const passage = [{
    path: '/passage',
    type: 'get',
    data() {
      let result = {
        type: 'success'
      };

      let data = [];

      for (let i = 1; i <= 7; i++) {
        let passage = {
          avatar: `/static/image/jian-re-writer/writer-${Random.natural(1, 17)}.jpg`,
          name: Random.cname(),
          time: `${Random.date('MM.dd')} ${Random.time('HH:mm')}`,
          title: Random.csentence(),
          content: Random.cparagraph(100, 200),
          label: Random.ctitle(2, 4),
          view: Random.natural(700, 14000),
          comment: Random.natural(30, 100),
          love: Random.natural(20, 90),
          pay: Random.natural(0, 10),
          img: `/static/image/jian-passage/passage-${Random.natural(1, 17)}.jpg`
        }
        data.push(passage);
      }

      result.data = data;

      return result;
    }
  },
  {
    path: '/more-passage',
    type: 'get',
    data() {
      let result = {
        type: 'success'
      };

      let data = [];

      for (let i = 1; i <= 5; i++) {
        let passage = {
          avatar: `/static/image/jian-re-writer/writer-${Random.natural(1, 17)}.jpg`,
          name: Random.cname(),
          time: `${Random.date('MM.dd')} ${Random.time('HH:mm')}`,
          title: Random.csentence(),
          content: Random.cparagraph(100, 200),
          label: Random.ctitle(2, 4),
          view: Random.natural(700, 14000),
          comment: Random.natural(30, 100),
          love: Random.natural(20, 90),
          pay: Random.natural(0, 10),
          img: `/static/image/jian-passage/passage-${Random.natural(1, 17)}.jpg`
        }
        data.push(passage);
      }

      result.data = data;

      return result;
    }
  }
]
