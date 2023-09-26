import './ListView.css';

export const ListView = (props) =>{
    const { items } = props;
    return <div className="itemsBox" key ={crypto.randomUUID()}>{items.map(item => <ShopItem item = {item}  key ={crypto.randomUUID()}/>)}</div>
    }

const ShopItem = (props) =>{
    const { item } = props;
    return <div className="item">
        <img src={item.img} className="item-img" alt="product appearance"/>
        <span className="item-title">{item.name}</span>
        <span className="item-color">{item.color}</span>
        <div className="item-info">
        <div className="item-price">${item.price}</div>
        <button className="item-buy">add to cart</button>
        </div>
    </div>
    }