# 安裝説明

## 通用安裝説明

以下方法適用於所有平臺，可快速下載 Gopeed：

1. 前往 [官網](https://gopeed.com) 下載，會根據你的作業系統自動選擇對應的版本進行下載。
2. 前往 [GitHub](https://github.com/GopeedLab/gopeed/releases) 下載，可以自行選擇對應的版本下載。

## 平臺專屬安裝説明

### Windows

在 Windows 平臺上提供了兩種發行版本，一種是 `安裝檔`，另一種則是 `便携檔`。`便携檔` 無需安裝，解壓縮後即可直接執行。`安裝檔` 則需進行安裝程序，其安裝流程與其他軟體相同。大家可以依照自己的喜好進行選擇。

> 便携檔的檔案名稱為：`Gopeed-v1.x.x-windows-amd64-portable.zip`

除了直接下載外，你還可以透過套件管理員來安裝或升級 Gopeed：

- [Scoop](https://github.com/ScoopInstaller/Scoop)：由社群維護的 Windows 命令列套件管理工具，輕量、靈活，安裝過程不需要系統管理員權限，方便管理與更新軟體。

  ```powershell
  scoop bucket add extras
  scoop install extras/gopeed
  ```

- [Winget](https://learn.microsoft.com/zh-tw/windows/package-manager/winget)：微軟官方套件管理員，與 Windows 系統深度整合。

  ```powershell
  winget install -e --id monkeyWie.Gopeed
  ```

#### 防火牆誤判

在 `Windows` 系統中，部分防毒軟體可能會誤判 Gopeed 的兩個核心元件：用於瀏覽器擴充套件通訊的 `host.exe` 和負責應用程式更新的 `updater.exe`，為確保瀏覽器擴充套件能夠正常攔截下載任務以及應用程式能夠自動更新，請將 Gopeed 的 `安裝目錄` 新增到防火牆或防毒軟體的白名單中。

::: tip 注意

**安全下載**：請務必依照本文檔中所提到的方法下載 Gopeed，例如從 [官網](https://gopeed.com) 或 [GitHub 官方存放庫](https://github.com/GopeedLab/gopeed/releases) 取得，或透過 Scoop、WinGet 安裝。請避免使用第三方管道下載，以確保軟體的安全性。

**關於誤判**：這可能與 Go 語言編譯的應用程式特性有關，目前還沒有什麼好的解決方案，後續會考慮將元件遷移到 Rust 開發來改善這一問題。

:::

### Linux

在 Linux 平臺上提供了 `.deb` 和 `.AppImage` 兩種安裝檔，可以自行選擇下載安裝。此外，還可以通過下列指令快速安裝。

- Flatpak

  ```sh
  flatpak install flathub com.gopeed.Gopeed
  ```

- Snap

  ```sh
  sudo snap install gopeed
  ```

### macOS

在 macOS 平臺上提供了 `.dmg` 安裝檔，雙擊即可安裝，安裝套件支援 `intel` 和 `apple silicon` 兩種架構。

> 附註：若在 macOS 平臺執行后提示損壞，請在終端機中執行 `xattr -d com.apple.quarantine /Applications/Gopeed.app` 指令

### Android

在 Android 平臺上提供了 `.apk` 安裝檔，可以直接下載安裝，支援所有的 CPU 架構。

### iOS

目前 iOS 平臺僅提供 `.ipa` 安裝檔，需要自行簽名安裝，建議使用 [TrollStore (巨魔商店)](https://github.com/opa334/TrollStore) 進行安裝。

> 為什麼沒有上架到 App Store？
>
> 因為蘋果的審核機制，不允許 BitTorrent 協定相關 App 上架。
>
> 為什麼沒有上架到 TestFlight？
>
> 因為沒錢！ 專案純為愛發電，如果能得到足夠的贊助，會立刻上架到 TestFlight，所以請多多支持，開源不易，感謝！

### Web

如果你需要一個遠端下載服務，那麼可以考慮使用 Web 版本，Gopeed 提供了各個平臺的 Web 版本，你可以根據自己的作業系統和 CPU 架構進行下載。

![web](/images/guide/install/web.png)

這裡我以 Windows 平臺為例，介紹如何使用 Web 版本，其它平臺的使用方式類似。

1. 下載 Web 版本，解壓縮後會得到一個資料夾，將其放到你想要存放的位置。
2. 在資料夾根目錄中開啟終端機，執行 `./gopeed.exe`，如果執行成功會看到下列輸出：

   ```bash

     _______   ______   .______    _______  _______  _______
   /  _____| /  __  \  |   _  \  |   ____||   ____||       \
   |  |  __  |  |  |  | |  |_)  | |  |__   |  |__   |  .--.  |
   |  | |_ | |  |  |  | |   ___/  |   __|  |   __|  |  |  |  |
   |  |__| | |  `--'  | |  |      |  |____ |  |____ |  '--'  |
   \______|  \______/  | _|      |_______||_______||_______/

   Server start success on http://[::]:9999
   ```

3. 開啟瀏覽器，造訪 `http://localhost:9999` 即可。

#### Web 配置

Web 版支援命令列參數或設定檔進行配置，命令列參數可以透過 `./gopeed.exe -h` 查看：

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

同時也支援透過設定檔進行配置，在根目錄下建立 `config.json` 組態檔，內容如下：

```json
{
  "address": "", // 綁定的 IP 位址 (預設：0.0.0.0)
  "port": 0, // 綁定的連接埠 (預設：9999)
  "username": "", // 服務身分認證使用者名稱 (預設：gopeed)
  "password": "", // 服務認證密碼，配合使用者名稱使用，若兩者皆為空則不啟用身分認證
  "apiToken": "", // HTTP API 令牌，在不啟用身分認證的情況下使用 API 令牌鑑權時，web 介面無法訪問，只能透過 API 訪問
  "storageDir": "", // 存储目錄
  "whiteDownloadDirs": ["/root/downloads", "/root/dir/*", "/root/dir?abc"] // 下載目錄白名單。配置此選項后，所有下載到非白名單資料夾的任務都會失敗，支援通配符，規則參考 https://pkg.go.dev/path/filepath#Match
}
```

另外也支援透過環境變數進行配置，規則為 `GOPEED_ConfigKey`，例如：

```sh
export GOPEED_ADDRESS="0.0.0.0"
export GOPEED_PORT="9999"
export GOPEED_USERNAME="gopeed"
export GOPEED_PASSWORD="xxx"
export GOPEED_APITOKEN=""
export GOPEED_STORAGEDIR=""
export GOPEED_WHITEDOWNLOADDIRS="/root/downloads,/root/dir/*,/root/dir?abc"
```

> 注意：如果你是在公網 IP 部署，請務必啟用身份認證，否則會有安全風險。

##### 預設下載配置

如果需要在伺服器首次啟動的時候設定預設下載配置，可以在 `config.json` 中添加 `downloadConfig` 欄位，配置詳情參考：[DownloaderStoreConfig](https://pkg.go.dev/github.com/GopeedLab/gopeed/pkg/base#DownloaderStoreConfig)，示例：

```json
{
  "address": "127.0.0.1",
  "port": 9999,
  "downloadConfig": {
    "downloadDir": "d:/test" // 設定預設下載目錄
  }
}
```

### Docker

只需一行指令即可運行：

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

如果需要啟用身份認證，可以傳遞環境變數參數(參考上一節 `Web 配置`)：

```sh
docker run --name gopeed -d -p 9999:9999 \
    -e GOPEED_USERNAME="admin" \
    -e GOPEED_PASSWORD="123" \
    -v /path/to/download:/app/Downloads \
    -v /path/to/storage:/app/storage \
    liwei2633/gopeed
```

### 寶塔面板 (適用 9.2.0 及以上的版本) 部署指引

1. 安裝寶塔面板，前往 [寶塔面板官網](https://www.bt.cn/new/download.html)，選擇正式版的腳本下載安裝。

2. 安裝後登入寶塔面板，在左側導覽列點選 Docker，首先進入會提示安裝 Docker 服務，點選立即安裝，按提示完成安裝

3. 完成安裝後在應用程式商店中找到 Gopeed，點選安裝，設定網域名稱、連接埠等基本資訊即可完成安裝。

   ::: tip 注意

   網域名稱為非必填，如果填寫了網域名稱則需透過「網站」 --> 「反向代理」來管理，填寫網域名稱後不需要勾選「允許外部存取」，否則需要勾選後才可以透過連接埠存取。

   :::

4. 安裝後在瀏覽器輸入上一步設定的網域名稱或者 IP + 連接埠即可存取。

### 命令列

命令列版本需要依賴 `Golang` 環境，如果你沒有安裝 `Golang` 環境，可以參考 [這裡](https://golang.org/doc/install) 進行安裝。

安裝命令：

```sh
go install github.com/GopeedLab/gopeed/cmd/gopeed@latest
```

安裝完成后便可以使用 `gopeed` 指令進行下載了，具體使用方法可以透過 `gopeed -h` 查看：

```sh
$ gopeed -h
Usage of gopeed:
   -C int
         Concurrent connections. (default 16)
   -D string
         Store directory. (default "C:\\Users\\levi")
```

#### 命令列使用範例

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
