//   Car 相关的 reducer文件

import { ADDCAR, JIANCAR } from '../actionTypes';


const initState = {
  productList:[
    {id: 1,name: 'apple', price: 18},
    {id: 2,name: 'banana', price: 15},
    {id: 3,name: 'link', price: 10},
  ],
  carList: []
}
export  default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADDCAR:
      // 要添加的商品
        var product = action.product;
      // 判断要添加的商品是否已经存在
        var index = state.carList.findIndex(item => item.id === product.id)
        if(index > -1) {

          //存在
          newState.carList[index].num++;
          newState.carList[index].total = newState.carList[index].num *
          newState.carList[index].price;
        }else {
          // 不存在
          newState.carList.push({...product, ...{
            num: 1,
            total: product.price
          }})
        }
        return newState;

    case JIANCAR:
      // 要添加的商品
      var product = action.product;
      // 判断要添加的商品是否已经存在
      var index = state.carList.findIndex(item => item.id === product.id);
      if(index > -1) {
        //存在
        if (newState.carList[index].num > 1) {
          newState.carList[index].num--;
          newState.carList[index].total -= newState.carList[index].price;
        } else {
          newState.carList.splice(index, 1);
        }
      }
      return newState;

    default:
      return state;
  }
}
