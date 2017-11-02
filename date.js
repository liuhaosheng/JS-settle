/**
 * Created by dell on 2017/10/30.
 时间解析
 */
export function formatDate(date, fmt) {
  //fmt:yyyy-MM-dd hh:mm,替换字符串
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {//定义表达式对象
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+':date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt=fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;

};
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
