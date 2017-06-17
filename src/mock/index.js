import Mock from 'mockjs'

// 模板
import { login } from './front-page.js'

// 首页请求路由
import { catalog } from './catalog.js'
import { hotTopics } from './hotTopics'
import { reWriter } from './reWriter'
import { passage } from './passage'
import { comment } from './comment'
import { chat } from './chat'
import { love } from './love'
import { follow } from './follow'
import { other } from './other'

let data = [].concat(
    login,
    catalog,
    hotTopics,
    reWriter,
    passage,
    comment,
    chat,
    love,
    follow,
    other
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;