import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "./UserTableComponent";
import RadarGraph from "./RadarGraphComponent";
import { updateData } from "../actions/ActionCreators";

const createData = (name, currentRatings, ratings1, ratings2) => {
  return { name, currentRatings, ratings1, ratings2 };
};

const createGraphData = (name, currentRatings, ratings1, ratings2) => {
  return {
    topic: name,
    C: currentRatings,
    R1: ratings1,
    R2: ratings2
  };
};

const data = [
  { topic: "Preferences", C: 100, R1: 110, R2: 80 },
  { topic: "Frame", C: 98, R1: 100, R2: 90 },
  { topic: "Process", C: 86, R1: 30, R2: 70 },
  { topic: "Information", C: 100, R1: 100, R2: 30 },
  { topic: "Alternatives", C: 85, R1: 90, R2: 110 }
];

const Main = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(state => state.graphData);
  //console.log('graphData', graphData);
  return (
    <div>
      <UserTable
        rows={graphData.labels.map((label, index) =>
          createData(
            label,
            graphData.currentRatings[index],
            graphData.ratings1[index],
            graphData.ratings2[index]
          )
        )}
        onUpdateRating={(e, isValidNum) => {
          dispatch(
            updateData({
              topic: e.target.getAttribute("data-col"),
              rating: e.target.value === "" ? "0" : e.target.value,
              name: e.target.name
            })
          );
        }}
      />
      <RadarGraph
        data={graphData.labels.map((label, index) =>
          createGraphData(
            label,
            graphData.currentRatings[index],
            graphData.ratings1[index],
            graphData.ratings2[index]
          )
        )}
      />
    </div>
  );
};

export default Main;
