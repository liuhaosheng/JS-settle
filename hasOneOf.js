/*
 * @Author: liuhaosheng 
 * @Date: 2018-11-28 14:23:01 
 * @Last Modified by: liuhaosheng
 * @Last Modified time: 2018-11-28 14:23:23
 */

 /**
  * @param {Array} target 目标数组
  * @param {Array} arr 需要查询的数组
  * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
  */
 
 export const hasOneOf = (targetarr, arr) => {
     return targetarr.some(_ => arr.indexOf(_) > -1)
 }