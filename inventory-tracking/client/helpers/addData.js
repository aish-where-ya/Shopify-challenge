const axios = require('axios');


let addData = {
    'addData' : (data) => {
        return new Promise((resolve,reject) =>{
            axios({
                method: 'post',
                url: "/create",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data: data,
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}
export default addData;