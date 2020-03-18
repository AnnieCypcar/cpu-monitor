import axios from 'axios';
const DATA_URL = 'http://localhost:5000/cpu-avg-load';

export default class Api {
    /** Async method to retrieve the graph data
     * @returns {Promise<Object>} a promise wrapping the JSON response
     */
    static async getGraphData() {
        try {
            return await axios.get(DATA_URL).then((response) => {
                return response.data;
            })
        } catch (error) {
            console.error('There was an error requesting the graph data', error);
        }
    }
}