import async from 'async';

// todo: without callback
const wait = (ms, id) => new Promise((resolve) => setTimeout(() => {
  console.log(`resolving ${id}, timestamp: ${new Date().toISOString()}`);
  resolve();
}, ms));

const iteratee = async (item) => wait(1000, item);

const arr = Array.from({ length: 20 }, (_, i) => i + 1);

async.mapLimit(arr, 5, iteratee);

console.log('arr',arr);