import { useState } from 'react';
import './Store.css';
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { CardsView} from '../CardsView/CardsView'
import { ListView} from '../ListView/ListView'

export const Store = () =>{

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

const initialState = {
  icon: "view_list",
  viewCards: products,
  viewList: products
}

const [state, setState] = useState(initialState);

  const onSwitch = () => {
    setState({icon: state.icon === "view_module" ? "view_list" : "view_module"});
    }


return <div className = 'wrapper'>
        <IconSwitch icon  = {state.icon}
            onSwitch={onSwitch}
        />
        {state.icon === "view_list" ? (
        <CardsView products={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
}
