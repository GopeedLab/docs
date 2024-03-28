# 擴充開發

Gopeed 支援使用`JavaScript`進行擴展開發，擴展可以增強Gopeed 的功能，例如下載某個網站的視頻，或者下載某個網站的音樂等等，可以通過[官方示例](https://github.com/ GopeedLab/gopeed-extension-samples/blob/main/README_zh-CN.md)快速了解一下。

Gopeed 擴充功能是基於`git`來實現去中心化的擴充管理，只要將擴充原始碼託管到遠端git 倉庫中，就可以透過Gopeed 進行安裝和更新，所以無論是`github`、`gitee`、`gitlab`還是 其它git 託管平台，都可以作為擴充的託管倉庫。

## 快速開始

### 使用鷹架搭建

Gopeed 提供了腳手架來幫助你快速創建一個擴展開發項目模版：

```sh
npx create-gopeed-ext@latest
```

在建立過程中，將會看到以下提示：

```sh
√ Project name (gopeed-extension-demo) ...
√ Choose a template » Webpack

Success! Created gopeed-extension-demo at D:\code\study\js\gopeed-extension-demo
Inside that directory, you can run several commands:

   git init
     Initialize git repository

   npm install
     Install dependencies

   npm run dev
     Compiles and hot-reloads for development.

   npm run build
     Compiles and minifies for production.

We suggest that you begin by typing:

   cd gopeed-extension-demo

Happy coding!
```

### 手動搭建

如果你對`node.js`週邊工具不太熟悉，也可以手動建立一個項目，檔案結構如下：

```sh
├── index.js
├── manifest.json
```

## 本機偵錯

在專案搭建好之後，需要進行本地調試，可以將本地的擴充項目安裝到 Gopeed 中進行調試，具體步驟如下：

1. 開啟 `Gopeed` 開發者模式，在擴充頁面`連續點選 5 次`安裝按鈕，即可開啟開發者模式。

![](/images/dev/extension/dev-mode.gif)

2. 點選按鈕在目錄選擇器中選擇擴充目錄，進行安裝。

3. 如果使用腳手架中`webpack`模式，可以透過`npm run dev`啟動自動編譯。

4. 建立任務即可看到擴充生效了。

![](/images/dev/extension/demo.gif)

可以看到透過腳手架建立的範例擴展，可以實現使用`https://github.com/hello`連結建立任務時，解析出一個`example/index.html`文件

> 註：開發者模式只在桌面平台有效。

## 開發解析

上一節中，已經能夠創建一個基礎的擴展並進行本地調試了，但是在面紗之下，它究竟是怎麼運作的呢？

首先我們來看看`manifest.json`文件，這個是擴展的清單文件，它描述了擴展的信息，每個擴展項目根目錄中必須包含一個`manifest.json`文件，本節中的示例文件如下 ：

```json
{
   "name": "gopeed-extention-demo",
   "author": "",
   "title": "gopeed extention demo title",
   "description": "gopeed extention demo description",
   "icon": "",
   "version": "1.0.0",
   "homepage": "",
   "repository": {
     "url": ""
   },
   "scripts": [
     {
       "event": "onResolve",
       "match": {
         "urls": ["*://github.com/*"]
       },
       "entry": "dist/index.js"
     }
   ],
   "settings": []
}
```

接下來逐一介紹各個字段的含義：

- `name`和`author`：Gopeed 中會使用`<author>@<name>`作為擴展的ID，填寫`author`後能確保不容易和別的擴展重名導致被覆蓋安裝，所以強烈建議 填寫`author`欄位。
- `title`和`description`：擴充的標題和描述。
- `icon`：擴充圖標，填寫相對路徑，範例：`icon.png`。
- `version`：擴充版本，使用 semver 規範，擴充更新時是基於此欄位進行比較的，所以請確保版本號是符合規範的。
- `homepage`：擴充首頁，範例：`https://gopeed.com`。
- `repository`：擴充所屬git 倉庫位址，Gopeed 擴充依賴`git`來實現去中心化的擴充管理，所以如果你的擴充功能需要被使用者安裝和更新，那麼就必須將擴充原始碼託管到遠端git 倉庫中 ，並配置此字段

   範例：

   ```json
   {
     "url": "https://github.com/gopeed/gopeed-extension-demo"
   }
   ```

   如果一個 git 倉庫中包含多個擴充項目的話，可以透過`directory`屬性指定子目錄，範例：

   ```json
   {
     "url": "https://github.com/GopeedLab/gopeed-extension-samples",
     "directory": "github-contributor-avatars-sample"
   }
   ```

   在 Gopeed 安裝時，需要透過`#`進行分割，即安裝連結為`https://github.com/GopeedLab/gopeed-extension-samples#github-contributor-avatars-sample`。

- `scripts`：`敲重點！ `這裡是 Gopeed 擴充功能啟動事件的設定。

   範例專案中配置的`onResolve`事件會在解析任務時觸發，透過`match.urls`欄位來匹配任務建立的url，如果符合成功，則會執行`entry`欄位指定的腳本文件，在上面的鷹架 在專案範例中，配置了符合`*://github.com/*`，然後執行`dist/index.js`文件，所以當我們輸入一個`https://github.com/hello`連結時被匹配 到，然後觸發了擴充腳本的執行，這裡先不講腳本的內容，後面會詳細介紹。

   > 符合規則和 chrome 擴充的符合規則一致，可以參考[這裡](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)

- `settings`：擴充設定項，透過設定聲明可以在 Gopeed 中產生對應的設定介面，提供使用者自訂設置，例如自訂`Cookie`、自訂`User-Agent`等等，範例：

   範例：

   ```json
   [
     {
       "name": "ua",
       "title": "User-Agent",
       "description": "自訂 User-Agent",
       "type": "string",
       "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
     }
   ]
   ```

   - `name`：設定項目名稱，必填。
   - `title`：設定項目標題，必填。
   - `description`：設定項描述，可選。
   - `type`：設定項目類型，可選值：`string`、`number`、`boolean`。
   - `value`：設定項目預設值，可選。

## 腳本編寫

上一節中，我們已經知道如何配置清單，接下來就來介紹下擴充腳本的編寫。

### 運行環境

Gopeed 擴充腳本引擎是由[goja](https://github.com/dop251/goja)來實現的，它是一個純Go 編寫的JavaScript 解釋器，但是由於goja 只是一個純js 運行時，所以`瀏覽 器`和`node.js`的API 都是不支援的，目前`Gopeed`實作了`XMLHttpRequest`、`fetch`兩個API，意味著你可以透過這兩個API 或基於它們的第三方函式庫來 實作網路請求，例如`axios`、`superagent`等等。

另外要注意一點的是，goja 原生支援大部分`es6+`的語法，但是極少數語法是不支援的，例如`async generator`，但是沒關係，透過腳手架創建的專案中已經配置好了`bable` ，你可以愉快的使用最新的es 語法，腳本最終會被編譯成`es5`語法。

### 範例腳本解析

每當事件觸發時，會執行`entry`欄位指定的腳本文件，範例專案中的腳本文件如下：

```js
gopeed.events.onResolve((ctx) => {
   ctx.res = {
     name: "example",
     files: [
       {
         name: "index.html",
         req: {
           url: "https://example.com",
         },
       },
     ],
   };
});
```

接下來，我們逐一介紹一下腳本的內容：

- `gopeed.events.onResolve`：這裡是註冊`onResolve`事件，方法裡面就是擴充的具體邏輯了。
- `ctx`：事件上下文，包含了當前事件的一些信息，在`onResolve`事件中，`ctx`包含了以下字段：
   - `req`：請求訊息，包含了資源的 url、headers 等等。
   - `res`：回應訊息，腳本需要將解析出的檔案清單賦值給`ctx.res`，Gopeed 會根據裡面傳回的檔案清單進行下載。
   - `settings`：擴充設定項，包含了使用者自訂的設定項。

簡而言之就是需要在`onResolve`回調函數中，根據`ctx.req`裡的請求信息，解析出需要下載的文件列表賦值給`ctx.res`即可，那麼上面的腳本就很好理解 了，就是解析出一個`index.html`檔案和對應的下載位址，然後賦值給`ctx.res`。

> 關於`ctx`的詳細說明可以參考[文件](https://docs.gopeed.com/site/reference/interfaces/gopeed.types.OnResovleContext.html)。

## 擴充設定

為了能讓擴展具有更動態化的能力，Gopeed 提供了一套標準的配置項，透過聲明`settings`屬性，可以在 Gopeed 中產生對應的擴展設定介面，提供使用者自訂設置，例如自訂`Cookie`、自訂`User-Agent`等等，來看看下面的範例：

```json
{
   "settings": [
     {
       "name": "cookie",
       "title": "網站 Cookie",
       "description": "Cookie 可以透過瀏覽器開發者工具取得",
       "type": "string"
     },
     {
       "name": "quality",
       "title": "預設畫質",
       "type": "number",
       "value": "1080",
       "options": [
         {
           "label": "1080P",
           "value": "1080"
         },
         {
           "label": "720P",
           "value": "720"
         },
         {
           "label": "480P",
           "value": "480"
         }
       ]
     }
   ]
}
```

這裡宣告了兩個設定項，一個是`cookie`，一個是`quality`，來看看它們的效果：

![](/images/dev/extension/demo-settings.gif)

可以看到`cookie`是一個輸入文字框，`quality`是一個下拉框，這裡需要注意的是，`type`字段決定了設定項目的類型，目前支援三種類型：

- `string`
- `number`
- `boolean`

如果配置了`options`選項，那麼就會渲染成下拉框供使用者選擇。

接著就是在擴充腳本中透過`gopeed.settings`取得設定的值了，範例：

```js
gopeed.events.onResolve((ctx) => {
   // 存取cooke設定項
   console.log(gopeed.settings.cookie);
   // 存取quality設定項
   console.log(gopeed.settings.quality);
});
```

## 擴充存儲

Gopeed 提供了一套儲存 API，以支援擴展持久化儲存數據，例如`登入token`等等，範例：

```js
gopeed.events.onResolve((ctx) => {
   // Get the token, if it not exists, then login
   const token = gopeed.storage.get("token");
   if(!token){
     const token = await login();
     gopeed.storage.set("token",token)
   }

   // Then do something with the token
   // ...
});
```

> 附註：詳細的 API 可以參考[文件](https://docs.gopeed.com/site/reference/interfaces/gopeed.types.Storage.html)。

## 擴充調試

在腳本中可以透過`gopeed.logger`物件進行日誌輸出，支援`debug`、`info`、`warn`、`error`三種級別，範例：

```js
gopeed.logger.debug("debug");
gopeed.logger.info("info");
gopeed.logger.warn("warn");
gopeed.logger.error("error");
```

日誌檔案在 Gopeed 安裝目錄裡的`logs`目錄下，檔案名稱為`extension.log`，可以透過`tail -f extension.log`指令即時查看日誌。

> 注意：debug 等級的日誌僅在開發者模式安裝的擴充功能中生效。

## 擴充功能發布

擴充開發完成後，如果是由鷹架創建的`webpack`工程，需要編譯一下：

```sh
npm run build
```

然後我們要建立一個`遠端倉庫`，例如在`github`上建立了一個`https://github.com/xxx/gopeed-extension-demo`倉庫，然後對應的修改一下`manifest.json`中的 `repository`字段：

```json
{
   "repository": {
     "url": "https://github.com/xxx/gopeed-extension-demo"
   }
}
```

> 正確的設定`repository`，可以讓擴充功能取得遠端更新的功能，如果擴充屬於 git 倉庫下的子目錄，可以透過`directory`屬性指定子目錄，範例：
>
> ```json
> {
> "repository": {
> "url": "https://github.com/xxx/gopeed-extension-demo",
> "directory": "path"
> }
> }
> ```

這裡也要記得配置好擴充的`author`和`name`字段，以降低和其它擴展重名的風險。

然後將專案推送到遠端倉庫即可完成發布，為了讓用戶更方便的在`github`檢索Gopeed 擴展，建議專案名字統一以`gopeed-extension-`開頭，例如`gopeed-extension-demo`，並且在 `github`中為專案打上`gopeed-extension`標籤。

## 擴充安裝

發佈到遠端倉庫之後，就可以在Gopeed 中安裝了，打開擴展頁面，輸入擴展的HTTP 協議的`git clone`地址(可以省略掉後面的`.git`後綴)，點擊`安裝`按鈕即可進行 安裝。

> 註：如果擴充目錄是子目錄，需要在位址後面加上`#`，再加上子目錄名稱，例如`https://github.com/xxx/gopeed-extension-demo#path`。

## 官方範例

官方提供了兩個具有代表性的範例擴充提供參考，分別是：

- [github-contributor-avatars-sample](https://github.com/GopeedLab/gopeed-extension-samples/tree/main/github-contributor-avatars-sample)

   此擴充功能是依賴`node.js`的項目，適用於複雜需求開發，透過`cheerio`庫解析網頁`DOM`，來取得需要下載的檔案清單。

- [github-release-sample](https://github.com/GopeedLab/gopeed-extension-samples/tree/main/github-release-sample)

   此擴充功能是`純js`項目，無任何依賴，適用於簡單需求開發，透過`fetch`實現網路請求，來取得需要下載的檔案清單。