# 接口文档

## 介绍

Gopeed 提供了一套 RESTful API，用于与下载器进行交互，开发者们可以通过这些 API 来实现定制化功能开发，例如接入浏览器扩展、油猴脚本等等。

## 公共参数

| 参数名      | 方式   | 类型   | 说明                                        |
| ----------- | ------ | ------ | ------------------------------------------- |
| X-Api-Token | header | string | 在 API 开启访问令牌的情况下，需要传递此参数 |

## 响应报文

所有接口的响应报文都是 JSON 格式，如下所示：

```json
{
    "code": 0,
    "msg": "",
    "data": data
}
```

当接口请求成功时`code` 为 0，其它状态码请参考 [错误码](#错误码)。

## 接口列表

注意下面所有接口的响应参数都对应 `data` 字段的值。

### 解析资源

- 请求示例

```http
POST /api/v1/resolve
Content-Type: application/json

{
  "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk"
}

---
{
  "code": 0,
  "msg": "",
  "data": {
    "id": "t72df25k-n7JwF4Nvmfsx",
    "res": {
      "name": "Gopeed-v1.2.3-android.apk",
      "size": 43385948,
      "range": true,
      "files": [
        {
          "name": "Gopeed-v1.2.3-android.apk",
          "path": "",
          "size": 43385948
        }
      ],
    }
  }
}
```

- 请求参数：

| 参数名 | 类型   | 说明                       | 示例 |
| ------ | ------ | -------------------------- | ---- |
|        | object | 参考 [请求对象](#请求对象) |      |

- 响应参数：

| 参数名 | 类型   | 说明                  | 示例                  |
| ------ | ------ | --------------------- | --------------------- |
| id     | string | 解析 ID               | t72df25k-n7JwF4Nvmfsx |
| res    | object | [资源对象](#资源对象) |                       |

### 创建任务

- 请求示例

```http
POST /api/v1/task
Content-Type: application/json

{
  "rid": "t72df25k-n7JwF4Nvmfsx",
  "opts": {
    "name": "",
    "path": "/download",
    "selectFiles": [
      0
    ]
  }
}

---
{
  "code": 0,
  "msg": "",
  "data: "UW-9cd739DwHmdncYoGUn"
}
```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明                                                                                                                          | 示例                  |
| ------ | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| rid    | string | ×    | 解析 ID                                                                                                                       | t72df25k-n7JwF4Nvmfsx |
| req    | object | ×    | [请求对象](#请求对象)，当解析 ID 为空时，可通过此参数直接创建任务，内部会自动做解析，适用于直接下载任务，不展示资源信息的场景 |                       |
| opts   | object | ×    | [任务选项](#任务选项)                                                                                                         |                       |

- 响应参数：

| 参数名 | 类型   | 说明    | 示例                  |
| ------ | ------ | ------- | --------------------- |
|        | string | 任务 ID | UW-9cd739DwHmdncYoGUn |

### 暂停下载任务

- 请求示例

```http
PUT /api/v1/tasks/{id}/pause
Content-Type: application/json

---
{
  "code": 0,
  "msg": "",
  "data": null
}
```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明    | 示例                  |
| ------ | ------ | ---- | ------- | --------------------- |
| id     | string | √    | 任务 ID | UW-9cd739DwHmdncYoGUn |

### 继续下载任务

- 请求示例

```http
PUT /api/v1/tasks/{id}/continue
Content-Type: application/json

---
{
  "code": 0,
  "msg": "",
  "data": null
}
```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明    | 示例                  |
| ------ | ------ | ---- | ------- | --------------------- |
| id     | string | √    | 任务 ID | UW-9cd739DwHmdncYoGUn |

### 删除任务

- 请求示例

```http
DELETE /api/v1/tasks/{id}?force=true
Content-Type: application/json

---
{
  "code": 0,
  "msg": "",
  "data": null
}
```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明                                                                 | 示例                  |
| ------ | ------ | ---- | -------------------------------------------------------------------- | --------------------- |
| id     | string | √    | 任务 ID                                                              | UW-9cd739DwHmdncYoGUn |
| force  | bool   | ×    | 是否删除已下载的文件，如果为 true 则会删除任务文件，为空时默认不删除 | true                  |

### 获取任务详情

- 请求示例

```http
GET /api/v1/tasks/{id}
Content-Type: application/json

---
{
  "code": 0,
  "msg": "",
  "data": {
    "id": "UW-9cd739DwHmdncYoGUn",
    "meta": {
      "req": {
        "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk",
        "extra": null
      },
      "res": {
        "name": "Gopeed-v1.2.3-android.apk",
        "size": 43385948,
        "range": true,
        "rootDir": "",
        "files": [
          {
            "name": "Gopeed-v1.2.3-android.apk",
            "path": "",
            "size": 43385948
          }
        ],
      },
      "opts": {
        "name": "Gopeed-v1.2.3-android.apk",
        "path": "./",
        "selectFiles": [0],
        "extra": {
          "connections": 16
        }
      }
    },
    "status": "done",
    "progress": {
      "used": 12886185300,
      "speed": 3615495,
      "downloaded": 43385948
    },
    "size": 43385948,
    "createdAt": "2023-03-04T19:11:01.8468886+08:00"
  }
}

```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明    | 示例                  |
| ------ | ------ | ---- | ------- | --------------------- |
| id     | string | √    | 任务 ID | UW-9cd739DwHmdncYoGUn |

- 响应参数：

参考 [任务对象](#任务对象)

### 获取任务列表

- 请求示例

```http
GET /api/v1/tasks?status=error,done
Content-Type: application/json

---
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "id": "UW-9cd739DwHmdncYoGUn",
      "meta": {
        "req": {
          "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk",
          "extra": null
        },
        "res": {
          "name": "Gopeed-v1.2.3-android.apk",
          "size": 43385948,
          "range": true,
          "rootDir": "",
          "files": [
            {
              "name": "Gopeed-v1.2.3-android.apk",
              "path": "",
              "size": 43385948
            }
          ],
        },
        "opts": {
          "name": "Gopeed-v1.2.3-android.apk",
          "path": "./",
          "selectFiles": [0],
          "extra": {
            "connections": 16
          }
        }
      },
      "status": "done",
      "progress": {
        "used": 12886185300,
        "speed": 3615495,
        "downloaded": 43385948
      },
      "size": 43385948,
      "createdAt": "2023-03-04T19:11:01.8468886+08:00"
    }
  ]
}
```

- 请求参数：

| 参数名 | 类型   | 必须 | 说明                         | 示例       |
| ------ | ------ | ---- | ---------------------------- | ---------- |
| status | string | ×    | 任务状态，为空时查询所有任务 | error,done |

- 响应参数：

参考[任务对象](#任务对象)，以数组形式返回

## 公共对象

### 请求对象

- json 示例：

```json
{
  "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk"
}
```

- 参数说明：

| 参数名 | 类型   | 必须 | 说明                                                             | 示例                         |
| ------ | ------ | ---- | ---------------------------------------------------------------- | ---------------------------- |
| url    | string | √    | 资源链接，也可以是一个本地文件绝对路径                           | https://www.baidu.com        |
| extra  | object | ×    | 额外参数，针对特殊协议传递，目前支持：[HTTP](#http-资源额外对象) | {"header":{"Cookie":"xxxx"}} |

### 资源对象

- json 示例：

```json
{
  "name": "Gopeed-v1.2.3-android.apk",
  "size": 43385948,
  "range": true,
  "files": [
    {
      "name": "Gopeed-v1.2.3-android.apk",
      "path": "",
      "rootDir": "",
      "size": 43385948
    }
  ]
}
```

- 参数说明：

| 参数名  | 类型   | 说明                                                         | 示例                               |
| ------- | ------ | ------------------------------------------------------------ | ---------------------------------- |
| name    | string | 资源名称                                                     | Gopeed-v1.2.3-android              |
| size    | int    | 资源大小，单位为字节                                         | 43385948                           |
| range   | bool   | 是否支持断点续传                                             | true                               |
| rootDir | string | 资源根目录名称，存在根目录时，下载的文件都会保存在此根目录下 | ubuntu-22.04-live-server-amd64.iso |
| files   | array  | [文件对象](#文件对象)列表                                    |                                    |

### HTTP 资源额外对象

- json 示例：

```json
{
  "method": "GET",
  "header": {
    "Cookie": "xxx"
  },
  "body": ""
}
```

- 参数说明

| 参数名 | 类型   | 必须 | 说明                       | 示例              |
| ------ | ------ | ---- | -------------------------- | ----------------- |
| method | string | ×    | 请求方法，为空时默认为 GET | POST              |
| header | object | ×    | 请求头                     | {"Cookie":"xxxx"} |
| body   | string | ×    | 请求体                     |                   |

### 文件对象

- json 示例：

```json
{
  "name": "Gopeed-v1.2.3-android.apk",
  "path": "",
  "size": 43385948
}
```

- 参数说明：

| 参数名 | 类型   | 说明                 | 示例                  |
| ------ | ------ | -------------------- | --------------------- |
| name   | string | 文件名称             | Gopeed-v1.2.3-android |
| path   | string | 文件路径             |                       |
| size   | int    | 文件大小，单位为字节 | 43385948              |

### 任务选项

- json 示例：

```json
{
  "name": "",
  "path": "/download",
  "selectFiles": [0]
}
```

- 参数说明：

| 参数名      | 类型   | 必须 | 说明                                                                | 示例                         |
| ----------- | ------ | ---- | ------------------------------------------------------------------- | ---------------------------- |
| name        | string | ×    | 自定义下载的文件名，如果为空则默认使用资源对象里的文件名            |                              |
| path        | string | ×    | 自定义下载的目录，如果为空则下载到程序根目录下                      | /download                    |
| selectFiles | array  | ×    | 指定资源中要下载的文件下标列表，从 0 开始，如果为空默认下载所有文件 | [0]                          |
| extra       | object | ×    | 额外参数，针对特殊协议传递，目前支持：[HTTP](#http-任务额外选项)    | {"header":{"Cookie":"xxxx"}} |

### HTTP 任务额外选项

- json 示例：

```json
{
  "connections": 16
}
```

- 参数说明

| 参数名      | 类型 | 必须 | 说明                                    | 示例 |
| ----------- | ---- | ---- | --------------------------------------- | ---- |
| connections | int  | ×    | 任务下载使用的连接数，如果为空默认为 16 | 32   |

### 任务对象

- json 示例：

```json
{
  "id": "UW-9cd739DwHmdncYoGUn",
  "meta": {
    "req": {
      "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk",
      "extra": null
    },
    "res": {
      "name": "Gopeed-v1.2.3-android.apk",
      "size": 43385948,
      "range": true,
      "rootDir": "",
      "files": [
        {
          "name": "Gopeed-v1.2.3-android.apk",
          "path": "",
          "size": 43385948
        }
      ]
    },
    "opts": {
      "name": "Gopeed-v1.2.3-android.apk",
      "path": "./",
      "selectFiles": [0],
      "extra": {
        "connections": 16
      }
    }
  },
  "status": "done",
  "progress": {
    "used": 12886185300,
    "speed": 3615495,
    "downloaded": 43385948
  },
  "size": 43385948,
  "createdAt": "2023-03-04T19:11:01.8468886+08:00"
}
```

- 参数说明：

| 参数名    | 类型   | 说明                                         | 示例                              |
| --------- | ------ | -------------------------------------------- | --------------------------------- |
| id        | string | 任务 ID                                      | UW-9cd739DwHmdncYoGUn             |
| meta      | object | [任务元数据](#任务元数据)                    |                                   |
| status    | string | 任务状态：ready, running, pause, error, done | done                              |
| size      | int    | 任务大小，只计算选中的文件，单位为字节       | 43385948                          |
| createdAt | string | 任务创建时间，返回 ISO 8601 标准格式         | 2023-03-04T19:11:01.8468886+08:00 |

### 任务元数据

- json 示例：

```json
{
  "req": {
    "url": "https://github.com/GopeedLab/gopeed/releases/download/v1.2.3/Gopeed-v1.2.3-android.apk",
    "extra": null
  },
  "res": {
    "name": "Gopeed-v1.2.3-android.apk",
    "size": 43385948,
    "range": true,
    "rootDir": "",
    "files": [
      {
        "name": "Gopeed-v1.2.3-android.apk",
        "path": "",
        "size": 43385948
      }
    ]
  },
  "opts": {
    "name": "Gopeed-v1.2.3-android.apk",
    "path": "./",
    "selectFiles": [0],
    "extra": {
      "connections": 16
    }
  }
}
```

- 参数说明：

| 参数名 | 类型   | 说明                  | 示例 |
| ------ | ------ | --------------------- | ---- |
| req    | object | [请求对象](#请求对象) |      |
| res    | object | [资源对象](#资源对象) |      |
| opts   | object | [任务选项](#任务选项) |      |

## 错误码

| 错误码 | 说明           |
| ------ | -------------- |
| 0      | 成功           |
| 1000   | 服务器异常     |
| 1001   | 鉴权不通过     |
| 1002   | 请求参数不合法 |
| 2001   | 任务不存在     |
