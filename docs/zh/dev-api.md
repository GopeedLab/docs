# API 对接

Gopeed 对外提供了 HTTP API 接口，可以通过 API 进行下载管理。

## 启用接口

首先需要设置通讯协议为 TCP，通过**设置 -> 高级 -> 通讯协议**，将通讯协议设置为 TCP，并设置 IP 和端口，如下图所示：

![](/images/dev/set-port.png)

这样就可以通过`http://127.0.0.1:6666`访问 API 了，但是出于安全考虑，建议设置一个令牌，通过**设置 -> 高级 -> 接口令牌**，设置一个令牌，如下图所示：

![](/images/dev/set-token.png)

> 注：以上设置需要重启后生效。

## 使用 JS SDK

Gopeed 提供了官方的 js 库，首先需要安装`@gopeed/rest`库：

```
npm install @gopeed/rest
```

然后就可以愉快的使用了，示例：

```js
import { Client } from "@gopeed/rest";

(async function () {
  // 创建客户端
  const client = new Client();
  // 调用API创建任务
  const res = await client.createTask({
    req: {
      url: "https://example.com/file.zip",
    },
  });
})();
```

更多使用方法请参考 [文档](https://docs.gopeed.com/site/reference/classes/_gopeed_rest.Client.html)。

## 使用 Python SDK

来着社区用户 [@tick97115115](https://github.com/tick97115115) 提供的 Python SDK.

```bash
pip install gospeed_api
```

Github：https://github.com/tick97115115/gospeed_api
示例：https://github.com/tick97115115/gospeed_api/blob/main/tests/test_index.py

## 使用 HTTP 请求

当然也可以直接通过 HTTP 请求来调用 API，具体请参考 [接口文档](https://docs.gopeed.com/site/openapi/index.html)。
