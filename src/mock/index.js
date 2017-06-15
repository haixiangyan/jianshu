import Mock from 'mockjs'

// 模板
import { login } from './front-page.js'

// 首页请求路由
import { catalog } from './catalog.js'
import { hotTopics } from './hotTopics'
import { reWriter } from './reWriter'

let data = [].concat(
    login,
    catalog,
    hotTopics,
    reWriter
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;