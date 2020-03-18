const express = require('express');
const cors = require('cors');
const PORT = (process.env.PORT || 5000);
const app = express();
const os = require('os');
const cpus = os.cpus().length;

app.use(cors());

app.get('/cpu-avg-load', (req, res) => {
    const avgLoad = os.loadavg()[0] / cpus;
  
    const data = {
        time: new Date(),
        avgLoad
    }
    res.status(200).json(data);
    
    console.log('avg load over one minute', avgLoad);
});

app.listen(PORT, () => {
    console.log('Application ready on port ' + PORT);
});