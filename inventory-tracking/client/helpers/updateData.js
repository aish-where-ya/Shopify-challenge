const axios = require('axios');


let updateData = {
    'updateData' : (data) => {
        return new Promise((resolve,reject) =>{
            axios({
                method: 'put',
                url: "/update",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                params : {_id: data._id},
                data: data,
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}
export default updateData;