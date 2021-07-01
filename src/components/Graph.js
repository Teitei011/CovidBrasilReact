import {Bar, Line, Pie} from 'react-chartjs-2';


export const BarChart = ({titulo, label, dados, backgroundColor, borderColor }) => {


  const data =  {
    labels: label,
    datasets: [
      {
        label: titulo,
        backgroundColor: backgroundColor,
        borderColor:borderColor,
        borderWidth: 1,
        hoverBackgroundColor:backgroundColor,
        hoverBorderColor: borderColor,
        data: dados
      }
    ],
    options: {
      locale:  "pt-BR	",
      legend: {
        display:false,
        responsive: false,
      },
      
    }
  };
  
  return (
    <div>
        <h4>{titulo}</h4>
        <Bar
          data={data}
        />
    </div>
  );
}


export const PieChart = ({titulo, label, dados, backgroundColor, borderColor }) => {

  const data =  {
    labels: label,
    datasets: [
      {
        label: titulo,
        backgroundColor: backgroundColor,
        borderColor:borderColor,
        borderWidth: 1,
        hoverBackgroundColor:backgroundColor,
        hoverBorderColor: borderColor,
        data: dados
      }
    ],
    options: {
      legend: {
        display:false,
        responsive: false,
      },
      locale:  "pt-BR"
      
    }
  };
  
  return (
    <div>
        <h4>{titulo}</h4>
        <Pie
          data={data}
        />
    </div>
  );
}