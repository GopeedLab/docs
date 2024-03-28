# 介紹
*主要由Google Translate翻譯，對照[90d43b0](https://github.com/GopeedLab/docs/commit/90d43b0abe0d043e0b55212c430f7aeb7313963f)翻譯<br>
Gopeed（全名為Go Speed），直譯過來中文名叫做`夠快下載器`（不是狗屁下載器！），是一款由`Golang` + `Flutter` 開發的高速下載器，支援（HTTP、BitTorrent、Magnet ）協定下載，並且支援所有平台使用，支援的平台有：

- [x] **Windows**
- [x] **Macos**
- [x] **Linux**
- [x] **Android**
- [x] **iOS**
- [x] **Web**
- [x] **Docker**
- [x] **命令列**

## 特性

作為一個現代化的下載器，Gopeed 有著非常多的特性，以下是來簡單的介紹一下。

### 基本功能

- HTTP & HTTPS 多重協程下載
- Torrent & Magnet 下載
- 每日自動更新 tracker 列表
- Seed, DHT, PEX, uTP, Webtorrent, Upnp
- 國際化
- 暗黑主題

### 進階特性

除了基礎的下載功能外，還有許多進階特性，讓 Gopeed 可玩性更高。

- **對外開放 HTTP 介面**

   透過 RESTFul API 可以很方便的與 Gopeed 進行交互，例如你可以透過 API 來控制 Gopeed 的下載、暫停、刪除等等。

- **去中心化的擴展設計**

   可以透過`JavaScript`編寫擴充功能來增強 Gopeed 的下載功能，例如下載某個網站的視頻，或下載某個網站的音樂等等。

## 為什麼不是...?

這裡和市面上流行的下載器進行對比，可以很直觀的看到 Gopeed 的優勢。

| 功能 | Gopeed | Motrix | IDM |
| ----------- | ------ | --------------- | --------------- |
| HTTP | ✔️ | ✔️ | ✔️ |
| BitTorrent | ✔️ | ✔️ | ❌ |
| Magnet | ✔️ | ✔️ | ❌ |
| 全平台支援 | ✔️ | ❌ (僅限桌面平台) | ❌ (僅 Windows) |
| 免費 | ✔️ | ✔️ | ❌ |
| 開源 | ✔️ | ✔️ | ❌ |
| 非 Electron | ✔️ | ❌ | ✔️ |
| 開放 API | ✔️ | ✔️ | ❌ |
| 擴充支援 | ✔️ | ❌ | ❌ |

當然 Gopeed 可能也有很多不足的地方，但我們會持續的改進。

而且 Gopeed 是開源的，你可以隨時隨地的提出你的想法，或直接貢獻程式碼，讓 Gopeed 變得更好。