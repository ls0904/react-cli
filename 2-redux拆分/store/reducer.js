
import { combineReducers } from './node_modules/reduxe_modules/redux'
import CarApp from './CarApp';
import TodoApp from './TodoApp'

// const initState = {

// }

 export default combineReducers({
  car:CarApp,
  todo:TodoApp
})
// export default (state = initState, action) => {


  // switch (action.type) {
    // case SETINPUTVAL:
    //   return Object.assign({}, state, {
    //     inputVal: action.value
    //   });
    //   case TODOADD:
    //     return Object.assign({}, state, {
    //       todoList: [...state.todoList,state.inputVal]
    //     });
    //   case DELTODO:
    //     var newState1 = action.newState
    //     return Object.assign({}, state, {newState1})

  //     case ADDCAR:
  //       let product = action.product;
  //       let index = state.carList.findIndex(item => item.id === product.id)
  //       if(index > -1) {
  //         //存在商品
  //         let newCarList = JSON.parse(JSON.stringify(state.carList));
  //         newCarList[index].num++;
  //         newCarList[index].total = newCarList[index].price * newCarList[index].num
  //         return Object.assign({}, state, {
  //           carList: newCarList
  //         })
  //       }else {
  //         //不存在商品
  //         product = Object.assign({}, product, {
  //           num: 1,
  //           total: product.price * 1
  //         })
  //         // console.log(product);
  //         return Object.assign({}, state, {
  //           carList: [...state.carList, product]
  //         })
  //       }

  //     case JIANCAR:
  //         let product2 = action.product;
  //         let index2 = state.carList.findIndex(item => item.id === product2.id)
  //         if(index2 > -1) {
  //           //存在商品
  //           let newCarList2 = JSON.parse(JSON.stringify(state.carList));
  //           if(newCarList2[index2].num > 1) {
  //             newCarList2[index2].num--;
  //             newCarList2[index2].total = newCarList2[index2].price * newCarList2[index2].num
  //           }else {
  //             //不存在商品
  //            newCarList2.splice(index2, 1)
  //           }
  //           return Object.assign({}, state, {
  //             carList: newCarList2
  //           })
  //         }else {
  //           return state;
  //         }
  //     default:
  //         return state;
  // }
// }
