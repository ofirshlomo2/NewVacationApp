
import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux"

export default function VacationsReports() {

  const vacationsData = useSelector(state => state.vacationsData)
  const data = { datasets: [] }

  function _getRandomNumber() {
    return Math.floor(Math.random() * 250);
  }

  function _getReportData() {
    vacationsData.map((vacation) => {
      const dataObj = {
        label: vacation.destination,
        fill: false,
        backgroundColor: `rgb(${_getRandomNumber()}, ${_getRandomNumber()}, ${_getRandomNumber()})`,
        borderWidth: 5,
        pointRadius: 2,
        data: [vacation.followers_number]
      }
      data.datasets.push(dataObj)
    })
  }

  var options = {
    legend: {
      position: "bottom",

      labels: {
        boxWidth: 20,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true },
        },
      ],
    },
  };

  _getReportData()

  return (
    <div>
      <div style={{fontSize: "40px", textAlign: "center", color:"blue"}} >
        DATA REPORT :
        </div>
      <div className="row">
        <div className="col-8">

          <Bar data={data} options={options} />
        </div>

      </div>
    </div>

  );
 
}