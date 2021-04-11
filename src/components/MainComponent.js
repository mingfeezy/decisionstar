import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import UserTable from './UserTableComponent';
import RadarGraph from './RadarGraphComponent';
import { updateData } from '../actions/ActionCreators';

const createData = (name, currentRatings, ratings1, ratings2) => {
  return { name, currentRatings, ratings1, ratings2};
}

const Main = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(state => state.graphData);
  console.log('graphData', graphData);
  return (
    <div>
      <UserTable 
          rows={
            graphData.labels.map((label,index)=>
              createData(label, graphData.currentRatings[index], graphData.ratings1[index], graphData.ratings2[index])
            )
          }
          onUpdateRating={
            (e)=>{
              dispatch( updateData({
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