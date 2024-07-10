# API Integration

Gopeed provides an HTTP API interface for external use, allowing for download management through the API.

## Enable API

First, you need to set the communication protocol to TCP. Go to **Settings -> Advanced -> Communication Protocol** and set the communication protocol to TCP. Then, set the IP and port as shown in the figure below:

![](/images/dev/set-port.png)

After that, you can access the API through `http://127.0.0.1:6666`. For security reasons, it is recommended to set a token. Go to **Settings -> Advanced -> API Token** and set a token as shown in the figure below:

![](/images/dev/set-token.png)

> Note: The above settings take effect after a restart.

## Using JS SDK

Gopeed provides an official js library, which needs to be installed first by running `npm install @gopeed/rest`:

```
npm install @gopeed/rest
```

Then you can use it happily, for example:

```js
import { Client } from "@gopeed/rest";

(async function () {
  // Create a client
  const client = new Client();
  // Create a task
  const res = await client.createTask({
    req: {
      url: "https://example.com/file.zip",
    },
  });
})();
```

More usages please refer to [documentation](https://docs.gopeed.com/site/reference/classes/_gopeed_rest.Client.html).

## Using Python SDK

A Python SDK provided by community user [@tick97115115](https://github.com/tick97115115).

```bash
pip install gospeed_api
```

- Github：https://github.com/tick97115115/gospeed_api
- Example：https://github.com/tick97115115/gospeed_api/blob/main/tests/test_index.py

## Using HTTP API

Of course, you can also directly call the API through HTTP requests. For details, please refer to the [API documentation](https://docs.gopeed.com/site/openapi/index.html).
