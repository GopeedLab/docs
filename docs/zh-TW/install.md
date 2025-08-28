# 安裝

1. 前往 [官網](https://gopeed.com) 下載，會根據你的作業系統自動選擇對應的版本進行下載。
2. 前往 [GitHub](https://github.com/GopeedLab/gopeed/releases) 下載，可以自行選擇對應的版本下載。

## Windows

Windows 分成兩個版本，一個是`安裝包`版本還有一個是`免安裝`版本，大家可以依照自己的喜好進行選擇。

> 免安裝版本檔案名稱為：`Gopeed-v1.x.x-windows-amd64-portable.zip`

### 防火牆誤報

在 `Windows` 系統中，部分防毒軟體可能會誤報 Gopeed 的兩個核心元件：用於瀏覽器擴充功能通訊的 `host.exe` 和負責應用程式更新的 `updater.exe`，為確保瀏覽器擴充功能能夠正常攔截下載任務以及應用程式能夠自動更新，請將`Gopeed安裝目錄`新增到防火牆或防毒軟體的白名單中。

::: tip 注意

**安全下載**：請確保從 [官網](https://gopeed.com) 或 [GitHub 官方存放庫](https://github.com/GopeedLab/gopeed/releases) 下載 Gopeed，避免從第三方管道下載以確保軟體安全性。

**關於誤報**：這可能與 Go 語言編譯的應用程式特性有關，目前還沒有什麼好的解決方案，後續會考慮將元件遷移到 Rust 開發來改善這一問題。

:::

## Macos

Macos 版本提供了`.dmg`文件，雙擊即可安裝，安裝套件支援`intel`和`apple silicon`兩種架構。

> 附註：macos 版本執行如果提示損壞，請在終端執行 `xattr -d com.apple.quarantine /Applications/Gopeed.app` 指令

## Linux

- Flatpak

  ```sh
  flatpak install flathub com.gopeed.Gopeed
  ```

- Snap

  ```sh
  sudo snap install gopeed
  ```

除此之外，還提供了`.deb`和`.AppImage`兩種安裝包，可以自行選擇下載安裝。

## Android

Android 版本提供了`.apk`文件，可以直接下載安裝，支援所有的 CPU 架構。

## iOS

目前 iOS 平台只提供了`.ipa`文件，需要自行簽名安裝，建議使用[TrollStore(巨魔商店)](https://github.com/opa334/TrollStore)進行安裝。

> 為什麼沒有上架到 App Store？
>
> 因為蘋果的審核機制，不允許 BitTorrent 協定相關 App 上架。
>
> 為什麼沒有上架到 TestFlight？
>
> 因為沒錢！ 專案純為愛發電，如果能得到足夠的贊助，會立刻上架到 TestFlight，所以請多多支持，開源不易，感謝！

## Web

如果你需要一個遠端下載服務，那麼可以考慮使用 Web 版本，Gopeed 提供了各個平台的 Web 版本，你可以根據自己的系統和 cpu 架構進行下載。

![](/images/guide/install/web.png)

這裡我以 Windows 平台為例，介紹如何使用 Web 版本，其它平台的使用方式也類似。

1. 下載 Web 版本，解壓縮後會得到一個資料夾，將其放到你想要的位置。
2. 在資料夾根目錄中開啟終端，執行`./gopeed.exe`，如果執行成功會看到下列輸出：

   ```bash

     _______   ______   .______    _______  _______  _______
   /  _____| /  __  \  |   _  \  |   ____||   ____||       \
   |  |  __  |  |  |  | |  |_)  | |  |__   |  |__   |  .--.  |
   |  | |_ | |  |  |  | |   ___/  |   __|  |   __|  |  |  |  |
   |  |__| | |  `--'  | |  |      |  |____ |  |____ |  '--'  |
   \______|  \______/  | _|      |_______||_______||_______/

   Server start success on http://[::]:9999
   ```

3. 開啟瀏覽器，造訪`http://localhost:9999` 即可。

### Web 配置

Web 版支援命令列參數或設定檔進行配置，命令列參數可以透過`./gopeed.exe -h`查看：

```sh
$ ./gopeed.exe -h
Usage of C:\Users\levi\Downloads\gopeed-web-v1.3.13-windows-amd64\gopeed.exe:
   -A string
         Bind Address (default "0.0.0.0")
   -P int
         Bind Port (default 9999)
   -T string
         API token, that can only be used when basic authentication is enabled.
   -c string
         Config file path (default "./config.json")
   -d string
         Storage directory
   -p string
         HTTP Basic Auth Password
   -u string
         HTTP Basic Auth Username (default "gopeed")
```

同時也支援透過設定檔進行配置，在根目錄下建立`config.json`文件，內容如下：

```json
{
  "address": "", // 綁定的IP位址（預設：0.0.0.0)
  "port": 0, // 綁定的連接埠（預設：9999)
  "username": "", // 服務身分認證使用者名，為空時不啟用身分認證
  "password": "", // 服務認證密碼（預設：gopeed)
  "apiToken": "", // HTTP API 令牌，在啟用身分認證的情況下使用 HTTP API 時，必須設定令牌
  "storageDir": "", // 存储目錄
  "whiteDownloadDirs": ["/root/downloads", "/root/dir/*", "/root/dir?abc"] // 下載目錄白名單，當配置了此選項時，所有下載到非白名單資料夾的任務都會失敗，支援通配符，規則參考 https://pkg.go.dev/path/filepath#Match
}
```

另外也支援透過環境變數進行配置，規則為`GOPEED_配置key`，例如：

```sh
export GOPEED_ADDRESS="0.0.0.0"
export GOPEED_PORT="9999"
export GOPEED_USERNAME="gopeed"
export GOPEED_PASSWORD="xxx"
export GOPEED_API_TOKEN=""
export GOPEED_STORAGE_DIR=""
export GOPEED_WHITE_DOWNLOAD_DIRS="/root/downloads,/root/dir/*,/root/dir?abc"
```

> 注意：如果你是在公網 ip 部署，請務必啟用身份認證，否則會有安全風險。

#### 預設下載配置

如果需要在伺服器首次啟動的時候設定預設下載配置，可以在`config.json`中添加`downloadConfig`欄位，配置詳情參考：[DownloaderStoreConfig](https://pkg.go.dev/github.com/GopeedLab/gopeed/pkg/base#DownloaderStoreConfig)，示例：

```json
{
  "address": "127.0.0.1",
  "port": 9999,
  "downloadConfig": {
    "downloadDir": "d:/test" // 設定預設下載目錄
  }
}
```

## Docker

直接一行指令即可運行：

```sh
docker run --name gopeed -d -p 9999:9999 liwei2633/gopeed
```

掛載下載目錄

```sh
docker run --name gopeed -d -p 9999:9999 \
    -v /path/to/download:/app/Downloads \
    liwei2633/gopeed
```

掛載資料目錄

```sh
docker run --name gopeed -d -p 9999:9999 \
    -v /path/to/download:/app/Downloads \
    -v /path/to/storage:/app/storage liwei2633/gopeed
```

指定容器組 ID 和使用者 ID

```sh
docker run --name gopeed -d -p 9999:9999 \
    -e PGID=100 \
    -e PUID=1000 \
    liwei2633/gopeed
```

如果需要啟用身份認證，可以傳遞環境變數參數(參考上一節`Web 設定`)：

```sh
docker run --name gopeed -d -p 9999:9999 \
    -e GOPEED_USERNAME="admin" \
    -e GOPEED_PASSWORD="123" \
    -v /path/to/download:/app/Downloads \
    -v /path/to/storage:/app/storage \
    liwei2633/gopeed
```

## 命令列

命令列版本需要依賴`Golang`環境，如果你沒有安裝`Golang`環境，可以參考[這裡](https://golang.org/doc/install)進行安裝。

安裝命令：

```sh
go install github.com/GopeedLab/gopeed/cmd/gopeed@latest
```

安裝完成就可以使用`gopeed`指令進行下載了，具體使用方法可以透過`gopeed -h`查看：

```sh
$ gopeed -h
Usage of gopeed:
   -C int
         Concurrent connections. (default 16)
   -D string
         Store directory. (default "C:\\Users\\levi")
```

### 命令列使用範例

下載一個 HTTP 資源：

```sh
gopeed https://example.com/file.zip
```

下載一個種子檔：

```sh
gopeed D:/Downloads/file.torrent
```

下載一個磁力連結：

```sh
gopeed magnet:?xt=urn:btih:xxxx
```

## 寶塔面板(適用 9.2.0 及以上的版本) 部署指引

1.安裝寶塔面板，前往[寶塔面板官網](https://www.bt.cn/new/download.html)，選擇正式版的腳本下載安裝。

2.安裝後登入寶塔面板，在左側導覽列點選 Docker，首先進入會提示安裝 Docker 服務，點選立即安裝，按提示完成安裝

3.完成安裝後在應用程式商店中找到 Gopeed，點選安裝，設定網域名稱、連接埠等基本資訊即可完成安裝。

注意：
網域名稱為非必填，如果填寫了網域名稱則透過【網站】--> 【反向代理】來管理，填寫網域名稱後不需要勾選【允許外部存取】，否則需要勾選後才可以透過連接埠存取

4.安裝後在瀏覽器輸入上一步設定的網域名稱或者 IP+連接埠即可存取。
