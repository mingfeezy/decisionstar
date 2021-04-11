import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import UserTable from './UserTableComponent';
import RadarGraph from './RadarGraphComponent';
import { addData } from '../actions/ActionCreators';

const Main = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(state => state.graphData);

  const createData = (name, currentRatings, ratings1, ratings2) => {
      return { name, currentRatings, ratings1, ratings2};
    }

  console.log('graphdata', graphData);

  return (
    <div>
      <UserTable 
          rows={
            graphData.labels.map((label,index)=>
              createData(label, graphData.currentRatings[index], graphData.ratings1[index], graphData.ratings2[index])
            )
          }
          onBlur={
            (e)=>{
              dispatch( addData({
                  topic: e.target.getAttribute("data-col"),
                  rating: e.target.value,
                  name:e.target.name
              }
              ));
            }
          }
      />
      <RadarGraph/>
    </div>
  );
};

export default Main;