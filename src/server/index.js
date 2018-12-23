/**
 * @Description: 服务端入口
 * @author 云离
 * @date: 2018/12/23
 */
const express = require('express')
const serverConfig = require('../config/server.config')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(serverConfig.listenPost, () => console.log('Example app listening on port 3000!'))
