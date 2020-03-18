# cpu monitor server

### Description:

The cpu monitor server serves up an endpoint /cpu-avg-load which provides the current cpu load of the server operating system over one minute along with the current timestamp.

### Start the server for development:

```
npm install
```
```
npm start
```

### Production builds:

Cors is currently enabled and should allow only localhost on lower environments before releasing to any production environment. Also, production builds will need to run node directly to start the service rather than the development nodemon.

### TODO:

- Explore using socket and EventEmitter for long polling
- Add unit and e2e testing on a production-like environment
- Add Open Api docs describing the endpoint

This project was built with [Express JS](https://github.com/expressjs/express).