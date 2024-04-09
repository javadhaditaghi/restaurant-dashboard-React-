import jsonData from './tableData.json'

const service = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = jsonData.slice(from, to);
            const wholeData = jsonData
            resolve({
                countPage: jsonData.length,
                data: data,
                wholeData: wholeData
            });
        })
    }
}

export default service;