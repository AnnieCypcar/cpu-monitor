# cpu monitor client

### Description:

The cpu monitor client is a front end application for displaying the current cpu average load of a device in the range of 0 to 10 minutes. Mock data is provided in the event the server requests fail.

### Run the app:
```
npm install

npm start
```

### Test:
```
npm test
```

### Build:
```
npm run build
```

### TODO:

Snapshot unit testing for LineChart with dummy data
End to end testing on a production-like environment
Additional features:
Currently data point colors turn red when the cpu load average is above 1, but to make this more clear and more of an "alert", the chart could show "flames" when cpu load average is above 1 for more than 2 minutes. Snapshot testing can then verify with test data the alerting system is working.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).