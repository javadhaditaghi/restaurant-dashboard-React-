import jsonData from './tableData.json'

const service = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = jsonData.slice(from, to);
            resolve({
                countPage: jsonData.length,
                data: data
            });
        })
    }
}

export default service;