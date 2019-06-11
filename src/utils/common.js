/**
 * 移除字符串的空白字符
 * @param {string} 待匹配字符串
 * @param {string} 可选，是否移除字符串中的空白字符，默认只移除字符串前后的空白字符
 */
const trim = (str, isGlobal) => {
  var result
  result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (isGlobal && isGlobal.toLowerCase() === 'g') {
    result = result.replace(/\s/g, '')
  }
  return result
}

/**
 * 获取指定cookie
 * @param {string} 指定cookie名称
 */
// 获取 cookie
function getCookie (name) {
  var cookieValue = null
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim()
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
 */
function setCookie (name, value, day = 14, path = '/') {
  if (day !== 0) {
    var expires = day * 24 * 60 * 60 * 1000
    var date = new Date(+new Date() + expires)
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=' + path
  } else {
    document.cookie = name + '=' + escape(value)
  }
}
/**
 * 删除cookie
 * @param name cookie的名称
 */
function delCookie (name) {
  setCookie(name, ' ', -1)
}
/**
 * 日期格式转换为距离当前时间间隔
 * @param dateTimeStamp 日期：2019-03-15 09:10:10
 */
function dateFormat (dateTimeStamp) {
  var formateDate
  var second = 1000
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  if (dateTimeStamp === undefined) {
    return false
  } else {
    // eslint-disable-next-line no-useless-escape
    dateTimeStamp = dateTimeStamp.replace(/\-/g, '/')
    var sTime = new Date(dateTimeStamp).getTime()
    var now = new Date().getTime()
    var diffValue = now - sTime
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var secC = diffValue / second
    if (monthC >= 1) {
      formateDate = parseInt(monthC) + '个月前'
    } else if (weekC >= 1) {
      formateDate = parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      formateDate = parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      formateDate = parseInt(hourC) + '个小时前'
    } else if (minC >= 1) {
      formateDate = parseInt(minC) + '分钟前'
    } else if (secC >= 1) {
      formateDate = parseInt(secC) + '秒前'
    } else {
      formateDate = '1秒前'
    }
  }
  return formateDate
}

export default {
  trim,
  getCookie,
  setCookie,
  delCookie,
  dateFormat
}
