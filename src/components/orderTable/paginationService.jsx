
const service = {
    getData: () => {
        return new Promise((resolve, reject) => {
            resolve({
                count: products.length,
                data: products
            });
        })
    }
}

export default service;