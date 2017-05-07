### vue
```vue
<input type="text" name="test" :value="msg" @input="changeMsg">
```
会不会导致循环触发。
猜测：不会因为@input需要手动输入才能触发

### vuex
. 如何保留状态热更新

### 工具
. 找不到eslint-plugin-vuefix
    . sublime是使用全局的eslint来进行lint的,因此要全局安装vuefix


### css
- 表单项以冒号对齐
    - ul>li>(div+div);
    - ul {display:table}
    - li {display: table-row}
    - div{display:table-cell; padding:5px; text-align:right}


### webpack 生产环境
- vue-loader怎么抽出CSS
    - vue-loader.options: {extract: true}; plugins: [new ExtractPlugin('style.css')]
- cross-env win上不起作用