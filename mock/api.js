import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /apc/users': {
    users: [1, 2]
  },
  // GET 可忽略
  '/apc/users/1': {
    id: 1
  },
  // 支持自定义函数，API 参考 express@4
  'POST /apc/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  // 使用 mockjs 等三方库
  'GET /apc/tags': mockjs.mock({
    'list|100': [{
      name: '@city',
      'value|1-100': 50,
      'type|0-2': 1
    }],
  }),
}
