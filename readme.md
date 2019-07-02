# cache-size

Get a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)'s size in bytes, useful when working with Service Workers.
\* Take into account that responses of type `opaque` will report a size of 0, more information [here](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque), [here](https://stackoverflow.com/questions/39109789/what-limitations-apply-to-opaque-responses) and [here](https://blog.fullstacktraining.com/what-is-an-opaque-response/).

## Install

```
$ npm install cache-size
```


## Usage

```js
import cacheSize from 'cache-size';

cacheSize('static-assets');
//=> 12327273 the space used by the entire cache in bytes
```


## API

### cacheSize(cachename)

#### cachename

Type: `string`

The name of the cache whose size you want to know.
