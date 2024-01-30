# Installation

1. Go to the official website to download, which will automatically select the corresponding version according to your operating system.
2. Go to GitHub to download, and you can choose the corresponding version to download by yourself.

## Windows

Windows has two distributions, one is a portable version, and the other is an installer version. The portable version does not need to be installed, just unzip it and run it. The installer version needs to be installed, and the installation process is the same as other software.

> The file name of the portable version is: Gopeed-v1.x.x-windows-amd64-portable.zip

## Macos

The Macos version provides a .dmg file, which can be installed by double-clicking. The installation package supports two architectures: intel and apple silicon.

> Tips: If the macos open failed, please execute the `xattr -d com.apple.quarantine /Applications/Gopeed.app` command in the terminal

## Linux

Currently, only the `.deb` installation package is provided for Linux. If you have other Linux distribution requirements, you can go to the issue for help, or compile it yourself.

## Android

The Android version provides a `.apk` file, which can be downloaded and installed directly, and supports all CPU architectures.

## iOS

Currently, only the `.ipa` file is provided for the iOS platform, which needs to be signed and installed by itself. It is recommended to use [TrollStore](https://github.com/opa334/TrollStore) for installation.

> Why is it not listed on the App Store?
>
> Because of Apple's review mechanism, BitTorrent protocol-related apps are not allowed to be listed.。
>
> Why is it not listed on TestFlight?
>
> Because there is no money! The project is purely for love and power generation. If enough sponsorship can be obtained, it will be listed on TestFlight immediately. So please support us more. Open source is not easy. Thank you!

## Web

If you need a remote download service, you can consider using the Web version. Gopeed provides Web versions for various platforms. You can download them according to your system and CPU architecture.

![](/images/guide/install/web.png)

Here is an example of how to use the Web version on the Windows platform, and the usage on other platforms is similar.

1. Download the Web version, and after decompression, you will get a folder. Put it where you want.
2. Open the terminal in the root directory of the folder and execute `./gopeed.exe`. If it runs successfully, you will see the following output:

   ```bash

      _______   ______   .______    _______  _______  _______
    /  _____| /  __  \  |   _  \  |   ____||   ____||       \
    |  |  __  |  |  |  | |  |_)  | |  |__   |  |__   |  .--.  |
    |  | |_ | |  |  |  | |   ___/  |   __|  |   __|  |  |  |  |
    |  |__| | |  `--'  | |  |      |  |____ |  |____ |  '--'  |
    \______|  \______/  | _|      |_______||_______||_______/

    Server start success on http://[::]:9999
   ```

3. Open the browser and visit `http://localhost:9999`.

### Web Configuration

The Web version supports configuration through command line parameters or configuration files. Command line parameters can be viewed through `./gopeed.exe -h`:

```sh
$ ./gopeed.exe -h
Usage of C:\Users\liwei\Downloads\gopeed-web-v1.3.13-windows-amd64\gopeed.exe:
  -A string
        Bind Address (default "0.0.0.0")
  -P int
        Bind Port (default 9999)
  -T string
        API token, that can only be used when basic authentication is enabled.
  -c string
        Config file path (default "./config.json")
  -p string
        HTTP Basic Auth Password
  -u string
        HTTP Basic Auth Username (default "gopeed")
```

It also supports configuration through configuration files. Create a `config.json` file in the root directory with the following content:

```json
{
  "address": "", // Bind address (default "0.0.0.0")
  "port": 0, // Bind port (default 9999)
  "username": "", // HTTP Basic Auth Username (default "gopeed")
  "password": "", // HTTP Basic Auth Password
  "token": "" // HTTP API token, it must be configured when using HTTP API in the case of enabling identity authentication
}
```

> Note: If you are deploying on a public IP, it is recommended to enable identity authentication, otherwise there will be security risks.

## Docker

One line of command:

```sh
docker run --name gopeed -d -p 9999:9999 liwei2633/gopeed
```

Mount the download directory

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/root/Downloads liwei2633/gopeed
```

Mount the data directory

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/root/Downloads -v /path/to/storage:/app/storage liwei2633/gopeed
```

If you need to enable identity authentication, you can pass command line parameters (refer to the previous section `Web Configuration`):

```sh
docker run --name gopeed -d -p 9999:9999 -v /path/to/download:/root/Downloads -v /path/to/storage:/app/storage liwei2633/gopeed -u admin -p 123456
```

## Command Line

The command line version depends on the `Golang` environment. If you do not have the `Golang` environment installed, you can refer to [here](https://golang.org/doc/install) for installation.

Installation command:

```sh
go install github.com/GopeedLab/gopeed/cmd/gopeed@latest
```

After the installation is complete, you can use the `gopeed` command to download. You can view the specific usage method through `gopeed -h`:

```sh
$ gopeed -h
Usage of gopeed:
  -C int
        Concurrent connections. (default 16)
  -D string
        Store directory. (default "C:\\Users\\levi")
```

### Command Line Usage Example

Download an HTTP resource:

```sh
gopeed https://example.com/file.zip
```

Download a torrent file:

```sh
gopeed D:/Downloads/file.torrent
```

Download a magnet link:

```sh
gopeed magnet:?xt=urn:btih:xxxx
```
