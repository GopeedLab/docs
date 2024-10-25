# 安装

1. 前往 [官网](https://gopeed.com) 下载，会根据你的操作系统自动选择对应的版本进行下载。
2. 前往 [GitHub](https://github.com/GopeedLab/gopeed/releases) 下载，可以自行选择对应的版本进行下载。

## Windows

Windows 分为两个版本，一个是`安装包`版本还有一个是`免安装`版本，大家可以根据自己的喜好进行选择。

> 免安装版本文件名为：`Gopeed-v1.x.x-windows-amd64-portable.zip`

## Macos

Macos 版本提供了`.dmg`文件，双击即可安装，安装包支持`intel`和`apple silicon`两种架构。

> 注：macos 版本运行如果提示损坏，请在终端执行 `xattr -d com.apple.quarantine /Applications/Gopeed.app` 命令

## Linux

- Flatpak

  ```sh
  flatpak install flathub com.gopeed.Gopeed
  ```

- Snap

  ```sh
  sudo snap install gopeed
  ```

除此之外，还提供了`.deb`和`.AppImage`两种安装包，可以自行选择下载安装。

## Android

Android 版本提供了`.apk`文件，可以直接下载安装，支持所有的 CPU 架构。

## iOS

目前 iOS 平台只提供了`.ipa`文件，需要自行签名安装，推荐使用[TrollStore(巨魔商店)](https://github.com/opa334/TrollStore)进行安装。

> 为什么没有上架到 App Store？
>
> 因为苹果的审核机制，不允许 BitTorrent 协议相关 App 上架。
>
> 为什么没有上架到 TestFlight？
>
> 因为没钱！项目纯为爱发电，如果能得到足够的赞助，会立刻上架到 TestFlight，所以请多多支持，开源不易，感谢！

## Web

如果你需要一个远程下载服务，那么可以考虑使用 Web 版本，Gopeed 提供了各个平台的 Web 版本，你可以根据自己的系统和 cpu 架构进行下载。

![](/images/guide/install/web.png)

这里我以 Windows 平台为例，介绍一下如何使用 Web 版本，其它平台的使用方法类似。

1. 下载 Web 版本，解压后会得到一个文件夹，将其放到你想要的位置。
2. 在文件夹根目录打开终端，执行`./gopeed.exe`，如果运行成功会看到如下输出：

   ```bash

      _______   ______   .______    _______  _______  _______
    /  _____| /  __  \  |   _  \  |   ____||   ____||       \
    |  |  __  |  |  |  | |  |_)  | |  |__   |  |__   |  .--.  |
    |  | |_ | |  |  |  | |   ___/  |   __|  |   __|  |  |  |  |
    |  |__| | |  `--'  | |  |      |  |____ |  |____ |  '--'  |
    \______|  \______/  | _|      |_______||_______||_______/

    Server start success on http://[::]:9999
   ```

3. 打开浏览器，访问`http://localhost:9999` 即可。

### Web 配置

Web 版支持命令行参数或者配置文件进行配置，命令行参数可以通过`./gopeed.exe -h`查看：

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

同时也支持通过配置文件进行配置，在根目录下创建`config.json`文件，内容如下：

```json
{
  "address": "", // 绑定的IP地址（默认：0.0.0.0)
  "port": 0, // 绑定的端口（默认：9999)
  "username": "", // 服务身份认证用户名，为空时不启用身份认证
  "password": "", // 服务身份认证密码（默认：gopeed)
  "apiToken": "", // HTTP API 令牌，在启用身份认证的情况下使用 HTTP API 时，必须配置令牌
  "storageDir": "", // 存储目录
  "whiteDownloadDirs": ["/root/downloads", "/root/dir/*", "/root/dir?abc"] // 下载目录白名单，当配置了此选项时，所有下载到非白名单文件夹的任务都会失败，支持通配符，规则参考 https://pkg.go.dev/path/filepath#Match
}
```

> 注：如果在公网 ip 上进行部署，建议启用身份认证，否则会有安全风险。

#### 默认下载配置

如果需要在服务器首次启动的时候设置默认下载配置，可以在`config.json`中添加`downloadConfig`字段，配置详情参考：[DownloaderStoreConfig](https://pkg.go.dev/github.com/GopeedLab/gopeed/pkg/base#DownloaderStoreConfig)，示例：

```json
{
  "address": "127.0.0.1",
  "port": 9999,
  "downloadConfig": {
    "downloadDir": "d:/test" // 设置默认下载目录
  }
}
```

## Docker

直接一行命令即可运行：

```sh
docker run --name gopeed -d -p 9999:9999 liwei2633/gopeed
```

挂载下载目录

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/app/Downloads liwei2633/gopeed
```

挂载数据目录

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/app/Downloads -v /path/to/storage:/app/storage liwei2633/gopeed
```

如果需要启用身份认证，可以传递命令行参数(参考上一节`Web 配置`)：

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/app/Downloads -v /path/to/storage:/app/storage liwei2633/gopeed -u admin -p 123456
```

## 命令行

命令行版本需要依赖`Golang`环境，如果你没有安装`Golang`环境，可以参考[这里](https://golang.org/doc/install)进行安装。

安装命令：

```sh
go install github.com/GopeedLab/gopeed/cmd/gopeed@latest
```

安装完成就可以使用`gopeed`命令进行下载了，具体使用方法可以通过`gopeed -h`查看：

```sh
$ gopeed -h
Usage of gopeed:
  -C int
        Concurrent connections. (default 16)
  -D string
        Store directory. (default "C:\\Users\\levi")
```

### 命令行使用示例

下载一个 HTTP 资源：

```sh
gopeed https://example.com/file.zip
```

下载一个种子文件：

```sh
gopeed D:/Downloads/file.torrent
```

下载一个磁力链接：

```sh
gopeed magnet:?xt=urn:btih:xxxx
```

## 宝塔面板
1. 安装宝塔面板，前往宝塔面板官网，选择正式版的脚本下载安装。
2. 安装后登录宝塔面板，在左侧导航栏中点击 Docker，首次进入会提示安装Docker服务，点击立即安装，按提示完成安装
3. 安装完成后在应用商店中找到`Gopeed`，点击安装，配置域名、用户名、密码等基本信息即可完成安装。
4. 安装后在浏览器输入上一步骤设置的域名即可访问。
