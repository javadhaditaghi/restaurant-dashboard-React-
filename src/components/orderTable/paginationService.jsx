import jsonData from './tableData.json'
import { ordersHeadCells } from '../../constants/consts';
import customersData from '../customersTable/customersData.json'
import { customersHeadCells } from '../../constants/consts';

const service = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            //Orders data preparation
            const data = jsonData.slice(from, to);
            const wholeData = jsonData
            const ordersHead = ordersHeadCells

            // Customers Data preaparation 
            const customerData = customersData.slice(from, to);
            const wholeCustomersData = customersData
            const customersHead = customersHeadCells

            resolve({
                //Orders data 
                countPage: jsonData.length,
                data: data,
                wholeData: wholeData,
                ordersHead: ordersHead,


                //Customers Data 
                countPageCustomers: wholeCustomersData.length,
                customersData: customerData,
                wholeCustomersData: wholeCustomersData,
                customersHead: customersHead
            });
        })
    }
}

export default service;