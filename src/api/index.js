let baseUrl = ''

process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'http://yanzihao.online'

export default baseUrl