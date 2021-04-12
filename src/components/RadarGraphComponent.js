import React from "react";
import { useSelector } from "react-redux";
import { Radar } from "@iftek/react-chartjs-3";
import { GradeSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <div className={classes.graph}>
      <Radar data={data} />
    </div>
  );
};

export default RadarGraph;
