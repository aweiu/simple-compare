# simple-compare
简单的 JS 对象比较器

## 安装
```
npm install simple-compare
```

## 示例
```
// 本插件为 es6 模块 请在 babel 环境下使用
import compare from 'simple-compare'
compare({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 })
```
返回：
```
{
  // 差异总数
  count: 2,
  // 差异部分
  difference: { b: 3, c: 4},
  // 原始数据
  raw: { a: 1, b: 2 }
}
```
