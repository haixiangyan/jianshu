const Mock = require('mockjs');
const Random = Mock.Random;

export const hotTopics = [
    {
        path: '/hot-topics',
        type: 'get',
        data() {
            let result = {
                type: 'success',
                data: [
                    {
                        src: '/static/image/jian-hot-topics/top-1.png',
                    },
                    {
                        src: '/static/image/jian-hot-topics/top-2.png',
                    },
                    {
                        src: '/static/image/jian-hot-topics/top-3.png',
                    },
                    {
                        src: '/static/image/jian-hot-topics/top-4.png',
                    },
                    {
                        src: '/static/image/jian-hot-topics/top-5.png',
                    }
                ]
            };

            return result;
        }
    }
]
