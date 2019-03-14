import axios from 'axios';
// import baseUrl from '@/api/index'

const api = {
  // 请求轮播图数据
  requestBannerData () {
    return new Promise((resolve, reject) => {
      axios.get('/react/banner')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  },
  // 请求手机数据
  requestPhoneData () {
    return new Promise((resolve, reject) => {
      axios.get('/react/telphone')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  },
  // 请求声学数据
  requstSoundData () {
    return new Promise((resolve, reject) => {
      axios.get('/react/sound')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  },
  // 请求配件数据
  requestPartsData () {
    return new Promise((resolve, reject) => {
      axios.get('/react/parets')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  },
  // 请求生活周边数据
  requestLiftData () {
    return new Promise((resolve, reject) => {
      axios.get('/react/live')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  }
}

export default api