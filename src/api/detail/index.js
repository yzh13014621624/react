import baseUrl from '@/api/requestUrl';
import axios from 'axios';

let api = {
  requestdata(id) {
    console.log(id)
    return new Promise((resolve,reject) => {
      axios.get(baseUrl + '/react/detailmain?id=' + id ).then(data => {
        console.log(data)
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestlocation () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/location').then(data => {
        console.log(data.data.data)
        resolve(data.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default api