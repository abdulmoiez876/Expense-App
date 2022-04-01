import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props) {
    let valueArray = props.dataPoints.map(function(dataPoint) {
        return (
            dataPoint.value
        )
    })
    let maxValue = Math.max(...valueArray);
    
    return (
        <div className="chart">
            {props.dataPoints.map(function (dataPoint) {
                return (
                    <ChartBar
                        key = {dataPoint.label}
                        value = {dataPoint.value}
                        label = {dataPoint.label}
                        maxValue = {maxValue}
                    />
                )
            })}
        </div>
    )
}

export default Chart;