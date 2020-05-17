
import http from 'http'
import dotenv from 'dotenv'
import express from './src'

dotenv.config()

const { NODE_PORT, NODE_HOST } = process.env
const server = http.createServer(express)

server.listen(NODE_PORT, NODE_HOST, () => {
  console.log(`🚀  Server ready at port ${NODE_PORT}`)
})
