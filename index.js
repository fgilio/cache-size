'use strict';

const cacheSize = async cacheName => {
	const cache = await caches.open(cacheName);
	const keys = await cache.keys();
	let cacheSize = 0;

	await Promise.all(
		keys.map(async key => {
			const response = await cache.match(key);
			const blob = await response.blob();
			cacheSize += blob.size;
		})
	);

	return cacheSize;
};

export default cacheSize;
