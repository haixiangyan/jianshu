import Mock from 'mockjs'

// 模板
import { login } from './front-page.js'

// 首页请求路由
import { catalog } from './catalog.js'
import { hotTopics } from './hotTopics'
import { reWriter } from './reWriter'
import { passage } from './passage'

let data = [].concat(
    login,
    catalog,
    hotTopics,
    reWriter,
    passage
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;