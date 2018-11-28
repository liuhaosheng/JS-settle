/*
 * @Author: liuhaosheng 
 * @Date: 2018-11-28 14:09:03 
 * @Last Modified by: liuhaosheng
 * @Last Modified time: 2018-11-28 14:13:00
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arry1, arry2) => {
    // min() 方法可返回指定的数字中带有最低值的数字。
    let len = Math.min(arry1.length, arry2.length);
    let i = -1;
    let res = [];
    while (++i < len) {
        const item = arry2[i];
        if (arry1.indexOf(item) > -1) res.push(item)
    }
    return res;
}