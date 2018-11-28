/*
 * @Author: liuhaosheng 
 * @Date: 2018-11-28 14:15:23 
 * @Last Modified by: liuhaosheng
 * @Last Modified time: 2018-11-28 14:19:17
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arry1, arry2) => {
    // ES6 Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组
    // new Set([...arry1, ...arry2]) 数组去重
    return Array.from(new Set([...arry1, ...arry2]));
}