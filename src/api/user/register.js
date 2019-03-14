import axios from 'axios';
import baseUrl from '@/api/index'
import 'antd-mobile/dist/antd-mobile.css'; 

const api = {
  requestUserData (obj) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/api/user/register', obj)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api