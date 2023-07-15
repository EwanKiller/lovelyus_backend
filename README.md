# Lovelyus Server

## 介绍

- MatchServer：房间管理服务（开房间、随机匹配），HTTP
- RoomServer：房间服务（运行实际房间逻辑），WebSocket

MatchServer 和 RoomServer 为一对多的关系，保持长连接 RPC

## 编译

```shell
npm ci
```

## 构建

```shell
npm run build
```

## 启动

```shell
# 开发环境下
# 启动 MatchServer
npm run dev:match

# 启动 RoomServer
npm run dev:room

# 构建环境下
cd dist/

npm ci

node matchServer.js

node roomServer.js
```
