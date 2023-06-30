# API Integration

Gopeed provides HTTP API interfaces for external use, which can be used for download management.

## Enable the API

First, you need to set the communication protocol to TCP. Go to **Settings -> Advanced -> Communication Protocol** and set the communication protocol to TCP. Then set the IP and port as shown in the figure below:

![](/develop/set-port.png)

After that, you can access the API through `http://127.0.0.1:6666`. However, for security reasons, it is recommended to set a token. Go to **Settings -> Advanced -> API Token** and set a token as shown in the figure below:

![](/develop/set-token.png)

> Note: The above settings take effect after a restart.

## API Documentation

Now you can unleash your creativity according to the [API documentation](api.html).
