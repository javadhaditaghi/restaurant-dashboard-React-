import jsonData from './tableData.json'
import { ordersHeadCells } from '../../constants/consts';
import customersData from '../customersTable/customersData.json'

const service = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = jsonData.slice(from, to);
            const wholeData = jsonData
            const ordersHead = ordersHeadCells
            resolve({
                countPage: jsonData.length,
                data: data,
                wholeData: wholeData,
                ordersHead: ordersHead

            });
        })
    }
}

export default service;