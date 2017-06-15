const Mock = require('mockjs');
const Random = Mock.Random;

export const catalog = [
    {
        path: '/catalog',
        type: 'get',
        data() {
            let result = {
                type: 'success',
                data: [
                    {
                        src: '/static/image/jian-catalog/catalog-1.jpg',
                        title: '上班那些事儿'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-2.jpg',
                        title: '旅行 在路上'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-3.jpg',
                        title: '@IT 互联网'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-4.jpg',
                        title: '短篇小说'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-5.jpg',
                        title: '连载小说'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-6.jpg',
                        title: '黛玉日报'
                    },
                    {
                        src: '/static/image/jian-catalog/catalog-7.jpg',
                        title: '青春'
                    }
                ]
            };

            return result;
        }
    }
]
