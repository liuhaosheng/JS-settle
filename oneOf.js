/*
 * @Author: liuhaosheng 
 * @Date: 2018-11-28 14:26:16 
 * @Last Modified by: liuhaosheng
 * @Last Modified time: 2018-11-28 14:28:56
 */

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 * @description 判断 某个字符串或数字 是否 存在某个列表中
 */

export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}