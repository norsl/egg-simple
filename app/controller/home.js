'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const filePath = path.join(__dirname, 'test.png')
    const stat = fs.statSync(filePath);
    const stream = fs.createReadStream(filePath);
    ctx.attachment('test.png');
    ctx.set('Content-Type', 'application/octet-stream');
    ctx.set('Content-Length', stat.size);
    ctx.body = stream;
  }
}

module.exports = HomeController;