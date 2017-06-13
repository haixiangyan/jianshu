import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 给 axios 设定全局
Object.defineProperty(Vue.prototype, '$axios', {
    value: axios
});

// 使用 Element UI 插件
Vue.use(ElementUI);