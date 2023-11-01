# 介绍

Gopeed（全称 Go Speed），是一款由 `Golang` + `Flutter` 开发的高速下载器，支持（HTTP、BitTorrent、Magnet）协议下载，并且支持所有平台使用，支持的平台有：

- [x] **Windows**
- [x] **Macos**
- [x] **Linux**
- [x] **Android**
- [x] **iOS**
- [x] **Web**
- [x] **Docker**
- [x] **命令行**

## 特性

作为一个现代化的下载器，Gopeed 有着非常多的特性，下面是来简单的介绍一下。

### 基本功能

- HTTP & HTTPS 多协程下载
- Torrent & Magnet 下载
- 每日自动更新 tracker 列表
- Seed, DHT, PEX, uTP, Webtorrent, Upnp
- 国际化
- 暗黑主题

### 高级特性

除了基础的下载功能外，还有很多高级特性，让 Gopeed 可玩性更高。

- **对外开放 HTTP 接口**

  通过 RESTFul API 可以很方便的与 Gopeed 进行交互，比如你可以通过 API 来控制 Gopeed 的下载、暂停、删除等等。

- **去中心化的扩展设计**

  可以通过`JavaScript`编写扩展来增强 Gopeed 的下载功能，比如下载某个网站的视频，或者下载某个网站的音乐等等。

## 为什么不是...?

这里和市面上流行的下载器进行对比，可以很直观的看到 Gopeed 的优势。

| 功能        | Gopeed | Motrix          | IDM             |
| ----------- | ------ | --------------- | --------------- |
| HTTP        | ✔️     | ✔️              | ✔️              |
| BitTorrent  | ✔️     | ✔️              | ❌              |
| Magnet      | ✔️     | ✔️              | ❌              |
| 全平台支持  | ✔️     | ❌ (仅桌面平台) | ❌ (仅 Windows) |
| 免费        | ✔️     | ✔️              | ❌              |
| 开源        | ✔️     | ✔️              | ❌              |
| 非 Electron | ✔️     | ❌              | ✔️              |
| 开放 API    | ✔️     | ✔️              | ❌              |
| 扩展支持    | ✔️     | ❌              | ❌              |

当然 Gopeed 可能也有很多不足的地方，但是我们会持续的改进。

而且 Gopeed 是开源的，你可以随时随地的提出你的想法，或者直接贡献代码，让 Gopeed 变得更好。
