import Mock from 'mockjs'

// 模板
import { login } from './front-page.js'

// 首页请求路由
import { catalog } from './catalog.js'

let data = [].concat(
    login,
    catalog
);

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;