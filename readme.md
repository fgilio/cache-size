# cache-size

> Get a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)&#39;s size, useful when working with Service Workers


## Install

```
$ npm install cache-size
```


## Usage

```js
import cacheSize from 'cacheSize';

cacheSize('static-assets');
//=> 12327273
```


## API

### cacheSize(cachename)

#### cachename

Type: `string`

The name of the cache whose size you want to know.
