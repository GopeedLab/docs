# API 對接

Gopeed 對外提供了 HTTP API 接口，可以透過 API 進行下載管理。

## 啟用介面

首先需要設定通訊協定為 TCP，透過**設定 -> 進階 -> 通訊協定**，將通訊協定設定為 TCP，並設定 IP 和端口，如下圖所示：

![](/images/dev/set-port.png)

::: info 说明
可以設定任意`端口`，但是需要注意不要使用被占用的或者系統保留的端口號，不然可能會導致訪問失敗。
:::

這樣就可以透過`http://127.0.0.1:9999`存取API 了，但是出於安全考慮，建議設定一個令牌，透過**設定-> 進階-> 介面令牌**，設定一個令牌 ，如下圖所示：

![](/images/dev/set-token.png)

> 註：以上設定需重新啟動後生效。

## 使用 JS SDK

Gopeed 提供了官方的 js 函式庫，首先需要安裝`@gopeed/rest`函式庫：

```
npm install @gopeed/rest
```

然後就可以愉快的使用了，範例：

```js
import { Client } 從 "@gopeed/rest";

(async function () {
   // 建立客戶端
   const client = new Client();
   // 呼叫API建立任務
   const res = await client.createTask({
     req: {
       url: "https://example.com/file.zip",
     },
   });
})();
```

更多使用方法請參考 [文件](https://docs.gopeed.com/site/reference/classes/_gopeed_rest.Client.html)。

## 使用 Python SDK

來自社區用戶 [@tick97115115](https://github.com/tick97115115) 提供的 Python SDK。

```bash
pip install gospeed_api
```

- Github：https://github.com/tick97115115/gospeed_api
- 範例：https://github.com/tick97115115/gospeed_api/blob/main/tests/test_index.py

## 使用 HTTP 請求

當然也可以直接透過 HTTP 請求來呼叫 API，具體請參考 [介面文件](https://docs.gopeed.com/site/openapi/index.html)。