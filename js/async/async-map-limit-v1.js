import async from 'async';

const wait = (ms, id) => new Promise((resolve) => setTimeout(() => {
  console.log(`resolving ${id}, timestamp: ${new Date().toISOString()}`);
  resolve();
}, ms));

const iteratee = (item, callback) => {
  wait(1000, item)
    .then(() => callback(null, item)) // Call the callback with null error and the item as the result
    .catch((error) => callback(error)); // Call the callback with the error
};

const arr = Array.from({ length: 20 }, (_, i) => i + 1);

async.mapLimit(arr, 5, iteratee, (err, results) => {
  if (err) {
    console.error('Error processing items:', err);
  } else {
    console.log('All items processed:', results);
  }
});

console.log('arr',arr);