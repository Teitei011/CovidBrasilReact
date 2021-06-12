import {Bar, Line} from 'react-chartjs-2';


const Graph = ({titulo, label, dados}) => {
  const data =  {
    labels: label,
    datasets: [
      {
        label: titulo,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
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