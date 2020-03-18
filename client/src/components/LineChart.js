import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  
  componentDidUpdate() {
    this.cpuChart.data.labels = this.props.data.map(d => d.time);
    this.cpuChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.cpuChart.update();
  }

  componentDidMount() {
    this.cpuChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        title: {
          display: true,
          text: 'CPU AVERAGE LOAD',
          fontColor: 'white',
          fontSize: 22,
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          fontStyle: 200
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                displayFormats: {
                  minute: 'h:mm a'
                }
              },
              ticks: {
                fontColor: 'white',
                autoSkip: true,
                maxTicksLimit: 10
              },
              gridLines: {
                color: 'lightslategray'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                fontColor: 'white'
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.time),
        datasets: [{
          label: 'cpu',
          data: this.props.data.map(d => d.value),
          fill: 'none',
          pointRadius: 5,
          pointStyle: 'circle',
          borderColor: (context) => {
            const index = context.dataIndex;
            const value = context.dataset.data[index];
            return value > 1 ? '#ff0000' : '#00ccff';
          },
          borderWidth: 1
        }]
      }
    });
  }

  render() {
    return <canvas ref={this.canvasRef} data-testid="canvas" />;
  }
}

export default LineChart;