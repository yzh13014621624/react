const reducer = (state = {
  bannerList: [],
  navList: [],
  addList: [],
  phoneList: [],
  soundList: [],
  partsList: [],
  lifeList: []
}, action) => {
  // type表示你需要做的事(行为),data表示你传递过来的数据
  const { type, data } = action;
  
  switch (type) {
    case 'CHANGE_BANNER_DATA':
    // console.log('状态管理器')
      return {
        bannerList: data,
        navList: state.navList,
        addList: state.addList,
        phoneList: state.phoneList,
        soundList: state.soundList,
        partsList: state.partsList,
        lifeList: state.lifeList
      }
    case 'CHANGE_NAV_DATA':
      return {
        bannerList: state.bannerList,
        navList: data,
        addList: state.addList,
        phoneList: state.phoneList,
        soundList: state.soundList,
        partsList: state.partsList,
        lifeList: state.lifeList
      }
    case 'CHANGE_ADD_DATA': 
      return {
        bannerList: state.bannerList,
        navList: state.navList,
        addList: data,
        phoneList: state.phoneList,
        soundList: state.soundList,
        partsList: state.partsList,
        lifeList: state.lifeList
      }
    case 'CHANGE_PHONE_DATA':
      return {
        bannerList: state.bannerList,
        navList: state.navList,
        addList: state.addList,
        phoneList: data,
        soundList: state.soundList,
        partsList: state.partsList,
        lifeList: state.lifeList
      }
    case 'CHANGE_SOUND_DATA': 
      return {
        bannerList: state.bannerList,
        navList: state.navList,
        addList: state.addList,
        phoneList: state.phoneList,
        soundList: data,
        partsList: state.partsList,
        lifeList: state.lifeList
      }
    case 'CHANGE_PARTS_DATA':
      // console.log('触发了')
      return {
        bannerList: state.bannerList,
        navList: state.navList,
        addList: state.addList,
        phoneList: state.phoneList,
        soundList: state.soundList,
        partsList: data,
        lifeList: state.lifeList
      }
    case 'CHANGE_LIFE_DATA': 
      return {
        bannerList: state.bannerList,
        navList: state.navList,
        addList: state.addList,
        phoneList: state.phoneList,
        soundList: state.soundList,
        partsList: state.partsList,
        lifeList: data
      }
    default: 
      return state
  }
}

export default reducer