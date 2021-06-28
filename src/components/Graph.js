import {Bar, Line} from 'react-chartjs-2';


const Graph = ({titulo, label, dados, backgroundColor, borderColor }) => {
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
    ]
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
export default Graph;