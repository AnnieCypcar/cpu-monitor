import React, { Component } from 'react';
import LineChart from './components/LineChart';
import Api from './services/Api';
import { createDummyNow } from './services/DataGenerator';
import './App.scss';
const INTERVAL_MULTIPLIER = 2;
const DATA_LIMIT = 20;

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    setData(data) {
        if (data.length > DATA_LIMIT) {
            data.shift();
        }
        this.setState({
            data
        })
    }

    componentDidMount() {
        const loadData = async () =>  {
            const data = this.state.data.slice()
            try {
                const {avgLoad, time, borderColor} = await Api.getGraphData();
                data.push({time, value: avgLoad, borderColor});
                this.setData(data);
            } catch (error) {
                const {time, value, borderColor} = createDummyNow();
                data.push({time, value, borderColor});
                this.setData(data);
                console.error('Dummy data provided due to the following error: ', error);
            }
        }
        loadData()
        setInterval(loadData, INTERVAL_MULTIPLIER * 1000);
    }

    render() {
        return (
            <div className="app chart-container">
                <LineChart
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default App;
