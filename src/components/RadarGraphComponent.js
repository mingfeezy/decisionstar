import React from 'react';
import { useSelector } from 'react-redux';
import { Radar } from '@iftek/react-chartjs-3';
import { GradeSharp } from '@material-ui/icons';

const RadarGraph = props => {
  const graphData = useSelector(state => state.graphData);
  //const currentRatings= useSelector(state => state.graphData.currentRatings);
 // console.log('graph', graphData);
  //console.log('label',graphData.labels);
  //console.log('current',currentRatings);
  const labels = graphData.labels;
  const data = {
    labels,
    datasets: [ 
      {
        label: 'Current Rating',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)', 
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data:graphData.currentRatings
      },
      {
        label: 'Reference Rating 1',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data:graphData.ratings1
      },
      {
        label: 'Reference Rating 2',
        backgroundColor: 'rgba(25,181,254,0.2)',
        borderColor: 'rgba(25,181,254,1)',
        pointBackgroundColor: 'rgba(25,181,254,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(25,181,254,1)',
        data:graphData.ratings2
      }
    ]
  };
  return (
    <>
      {graphData.currentRatings}
      <Radar data={data} />
    </>
  );
};



export default RadarGraph;