const RSS = require('rss');

const feedOptions = {
    title: 'Mi feed RSS',
    description: 'Los últimos artículos de mi blog',
    feed_url: 'https://ejemplo.com/feed.xml',
    site_url: 'https://ejemplo.com',
    image_url: 'https://ejemplo.com/logo.png',
    managingEditor: 'Tu nombre',
    webMaster: 'Tu nombre',
    language: 'es',
    pubDate: new Date(),
    ttl: '60',
};