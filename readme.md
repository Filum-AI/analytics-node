# analytics-node

A Node.js client for [Filum](https://filum.ai) 

## Installation

```bash
$ npm install --save filum-node-sdk
```

## Usage

```js
const Analytics = require('filum-node-sdk');

const client = new Analytics('write key');

client.track({
  user_id: 'User ID Example',
  event_name: 'Item Purchased',
  event_params: {
      name: "Testing item",
      stock: 10,
      price: 11.5
  }
});
```

You can refer to the example repo [here](https://github.com/Filum-AI/filum-node-sdk-example)

## License

Released under the [MIT license](license.md).