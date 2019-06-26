import React from './node_modules/reacte_modules/react';
import store from '../../store'
import {addCar, jianCar} from '../../store/actionCreate'
import './index.css'
class CarApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productList: store.getState().car.productList,
      carList: store.getState().car.carList
    }
    store.subscribe(() => {
    this.setState({
      productList: store.getState().car.productList,
      carList: store.getState().car.carList
      });
    })
  }
  render () {
    let {productList, carList} = this.state;
    return (
      <div className='box'>
        <ul className='left'>
         {
           productList.map(item => {
             return (
              <li key= { item.id }>
              <p>商品名称： {item.name}</p>
              <p>商品单价： {item.price}</p>
              <button onClick ={ store.dispatch.bind(null,jianCar(item))}>-</button>
              <button onClick ={ store.dispatch.bind(null,addCar(item))}>+</button>
              </li>
             )
           })
         }
        </ul>

        <ul className='right'>
            {
              carList.map(item => {
                return (
                  <li key= { item.id }>
                  <p>商品名称： { item.name }</p>
                  <p>商品单价： { item.price }</p>
                  <p>购买数量：{ item.num }</p>
                  <p>总价：{ item.total}</p>
                  </li>
                )
              })
            }
        </ul>
      </div>
    )
  }
}

export default CarApp
