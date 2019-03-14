import api from '@/api/home/index';

const requestBannerData = () => {
  return (dispatch, setState) => {
    api.requestBannerData().then(data => {
      dispatch({ type: 'CHANGE_BANNER_DATA', data})
    })
  }
}

const requestPhoneData = () => {
  return (dispatch) => {
    api.requestPhoneData().then(data => {
      data.pop()
      dispatch({ type: 'CHANGE_PHONE_DATA', data})
    })
  }
}

const requestSoundData = () => {
  return (dispatch) => {
    api.requstSoundData().then(data => {
      dispatch({ type: 'CHANGE_SOUND_DATA', data})
    })
  }
}

const requestPartsData = () => {
  return (dispatch) => {
    api.requestPartsData().then(data => {
      dispatch({ type: 'CHANGE_PARTS_DATA', data})
    })
  }
}

const requestLiftData = () => {
  return (dispatch) => {
    api.requestLiftData().then(data => {
      dispatch({ type: 'CHANGE_LIFE_DATA', data})
    })
  }
}

export default { requestBannerData, requestPhoneData, requestSoundData, requestPartsData, requestLiftData }
