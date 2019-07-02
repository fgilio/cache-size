# cache-size

> Get a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)'s size, useful when working with Service Workers


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
