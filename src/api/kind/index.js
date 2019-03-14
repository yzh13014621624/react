import baseUrl from '@/api/requestUrl';
import axios from 'axios';

const api = {
  requesttelphone () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/telphone').then(data => {
        console.log(data.data.data)
        resolve(data.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  requestparets () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/parets').then(data => {
        console.log(data.data.data)
        resolve(data.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  requestsound () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/sound').then(data => {
        console.log(data.data.data)
        resolve(data.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  requestlive () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/react/live').then(data => {
        console.log(data.data.data)
        resolve(data.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default api