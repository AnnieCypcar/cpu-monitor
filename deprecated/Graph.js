import React, {Fragment} from 'react';
import moment from 'moment';
import './Graph.scss';
const loads = [];

const Graph = ({avgLoad, time, startTime}) => {
  if (loads.length % 20 === 0 && loads.length !== 0) {
    loads.push([avgLoad, time, time]);
  } else {
    loads.push([avgLoad, time, null]);
  }
  
  return (
    <div className="graph-container">
      {loads.map((load, index) => {
        return (
          <Fragment key={index}>
            <div className="x-axis">
                <div className="activity-bar" 
                style={{height: `${load[0]*100}px`, backgroundColor: `${load[0] > 1 ? 'red' : 'blue'}`}}></div>
            </div>
            {(startTime === load[1] || load[2]) && 
                <div className="time-and-load">
                  <div className="details time-span">{moment(load[2] || startTime).format("h:mm a")}</div>
                  <div className="details load-span">{Number(load[0]).toFixed(2)}</div>
                </div>}
          </Fragment>
        )
      })}
    </div>
  )
}

export default Graph;