const axios = require('axios');


let getData = {
    'getData' : () => {
        return new Promise((resolve,reject) =>{
            axios({
                method: 'get',
                url: "/getAll",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}
export default getData;