import React from "react";
import { useSelector } from "react-redux";
//import { Radar } from "@iftek/react-chartjs-3";
import { GradeSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  Tooltip,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const useStyles = makeStyles({
  graph: {
    margin: "20px 0 0 0",
    width: "100%",
    height: "400px",
  },
});

const RadarGraph = ({ data }) => {
  const graphData = useSelector((state) => state.graphData);
  //console.log(graphData);
  //console.log("data", data);
  const handleMouseEnter = (props) => {
    console.log(props);
  };
  const classes = useStyles();

  return (
    <div className={classes.graph}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="100%"
          data={data}
          margin={{ top: 100, right: 0, left: 0, bottom: 0 }}
        >
          <PolarGrid radialLines={true} />
          <PolarAngleAxis dataKey="topic" />
          <Tooltip />
          <Radar
            name="Current Rating"
            dataKey="C"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0}
            onMouseEnter={handleMouseEnter}
          />
          <Radar
            name="Rating 1"
            dataKey="R1"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0}
            animationBegin={180}
          />
          <Radar
            name="Rating 2"
            dataKey="R2"
            stroke="#0000FF"
            fill="#0000FF"
            fillOpacity={0}
            animationBegin={180}
          />
          <Legend />
          <PolarRadiusAxis angle={45} domain={[0, 100]} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarGraph;
/*
const useStyles = makeStyles({
  graph: {
    margin: "20px 0 0 0"
  }
});

const RadarGraph = props => {
  const graphData = useSelector(state => state.graphData);
  const labels = graphData.labels;
  const classes = useStyles();

  const data = {
    labels,
    datasets: [
      {
        label: "Current Rating",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: graphData.currentRatings
      },
      {
        label: "Reference Rating 1",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: graphData.ratings1
      },
      {
        label: "Reference Rating 2",
        backgroundColor: "rgba(25,181,254,0.2)",
        borderColor: "rgba(25,181,254,1)",
        pointBackgroundColor: "rgba(25,181,254,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(25,181,254,1)",
        data: graphData.ratings2
      }
    ],
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 100000000000,
          userCallback: function(label, index, labels) {
            // when the floored value is the same as the value we have a whole number
            if (Math.floor(label) === label) {
              return label;
            }
          }
        }
      }
    }

    
    options: {
      legend: {
        position: "top"
      },
      responsive: true,
      maintainAspectRatio: false,
      radius: {
        fontSize: 24
      },
      scale: {
        reverse: false,
        gridLines: {
          color: [
            "black",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet"
          ]
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 1
        },
        pointLabels: {
          fontSize: 28,
          fontStyle: 600,
          font: {
            size: 30
          }
        }
      }
    }
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        min: 0,
        stepSize: 1
      }
    }
  };

  return (
    <div className={classes.graph}>
      <Radar data={data} />
    </div>
  );
};

export default RadarGraph;
*/
