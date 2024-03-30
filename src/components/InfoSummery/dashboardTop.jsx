import DashboardHeader from "../dashboardHeader/DashboardHeader"
import InfoSummary from "./InfoSummary"
import { useState } from "react"
import jsonData from './InfoSummart.json'


const DashboardTop = () => {
    const firstPeriod = jsonData[0]
    const secondPeriod = jsonData[1]
    const thirdPeriod = jsonData[2]


    const [data, setData] = useState(firstPeriod)


    const handleData = (index) => {
        setData(index == 0 ? firstPeriod : (index == 1 ? secondPeriod : thirdPeriod))
    }
    return (
        <>
            <DashboardHeader handleData={handleData} />
            <InfoSummary data={data} />
            {console.log(data)}
        </>

    )
}


export default DashboardTop