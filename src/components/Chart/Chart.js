import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
    return <div className="chart">
        {PaymentResponse.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value}/>)}
    </div>
};

export default Chart;