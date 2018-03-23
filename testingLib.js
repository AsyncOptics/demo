const aph = require('./node_modules/alpha/async_perf_hooks.js');
const fs = require('fs');

fs.writeFile('sick.json','hello world!!!', (err) => {
  if (err) console.log('ERR');
  process._rawDebug('write done');
})