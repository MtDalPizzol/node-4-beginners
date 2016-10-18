# About node-4-beginners

This is a simple Express.js/Socket.io app I developed for a Node.js introduction workshop at IFSUL, in Passo Fundo, Brazil.
It aims to cover a bunch of Express.js concepts and the very basics of Socket.io, taking a practical approach.

## Covered topics

* Serving static files
* View engines setup
* Routing
* Request data parsing
* Code splitting and organization
* Simple real time with Socket.io

## Quick start

```bash
# clone this repo
$ git clone https://github.com/MtDalPizzol/node-4-beginners.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the development server
$ npm start

# Browse to http://localhost:8081
```

## Gotchas

If you're using this at an educational institution, chances are that you're behind a corporate proxy server. So, before you run `npm install` you'll need to configure NPM to work through that server.

**Set NPM proxy:**
```bash
$ npm config set proxy "http://username:password@host:port/"

$ npm config set https-proxy "http://username:password@host:port/"
```

**Unset NPM proxy:**
```bash
$ npm config rm proxy

$ npm config rm https-proxy
```


## License

This software is provided free of charge and without restriction under the [MIT License](/LICENSE)
