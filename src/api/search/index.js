import axios from 'axios';
import baseUrl from '@/api/index'

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/main').then(data => {
        // console.log(data.data);
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api
