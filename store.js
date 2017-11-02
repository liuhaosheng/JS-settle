/**
 * Created by dell on 2017/11/1.
 */
/**
 * localStorage数据的存储
 * */
export function saveToLocal(id,key,value){

  let seller = window.localStorage.__seller__;
  if(!seller){
    seller = {};
    seller[id] = {};
  }else {
    seller = JSON.parse(seller);
    if(!seller[id]){
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__= JSON.stringify(seller)
};
/**
 * localStorage数据的读取
 * */
export function loadFromLocal(id,key,def){
  let seller = window.localStorage.__seller__;
  //如果seller不存在，返回默认值
  if(!seller){
    return def;
  }
  //如果seller存在,读取seller
  seller = JSON.parse(seller)[id];
  //如果没有读取到，返回默认值
  if(!seller){
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
