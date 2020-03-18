# cpu monitor

### A client and server for monitoring your desktop cpu

### NodeJS is required for both client and server applications:

Install node with a package manager, brew or [download from the nodejs website](https://nodejs.org/en/download/). LTS version is recommended.

For instructions on running the client and server and to learn more, visit the README in each of the [client]((https://github.com/AnnieCypcar/cpu-monitor/blob/master/client/README.md)) and [server](https://github.com/AnnieCypcar/cpu-monitor/blob/master/server/README.md) directories.

### Notes on timing / data view requirement:

To satisfy the time interval requirement in the current view, [INTERVAL_MULTIPLIER](https://github.com/AnnieCypcar/cpu-monitor/blob/master/client/src/App.js#L6) in App.js can be adjusted to 10 make requests every 10 seconds. Then, to satisfy the 10 minute interval requirement in the view, the [DATA_LIMIT](https://github.com/AnnieCypcar/cpu-monitor/blob/master/client/src/App.js#L7) in App.js can be adjusted to 60.

### Lessons learned:

In the first iteration of the cpu monitor, I created a bar graph with divs that displayed the time every 2 minutes and colors that changed when the cpu load average was above 1. The browser was able to render list of divs, but scaling the page with additional graphs would have degraded performance. Additionally, the box model layout doesn't lend itself to the animation needed. Canvas is a better approach for the dynamic data input and animation and that is the reason for the shift. The first attempt with the bar graph can be found in the [deprecated](https://github.com/AnnieCypcar/cpu-monitor/tree/master/deprecated) directory.