import './CardsView.css';

export const CardsView = (props) =>{
  const { products } = props;
  return <div className="cardsBox">{products.map(product => <ShopCard card = {product} key ={crypto.randomUUID()}/>)}</div>
  }

  const ShopCard = (props) =>{
    const { card } = props;
    return <div className="card">
      <span className="product-title">{card.name}</span>
      <span className="product-color">{card.color}</span>
      <img src={card.img} className="product-img" alt="product appearance"/>
      <div className="product-info">
        <div className="product-price">${card.price}</div>
        <button className="product-buy">add to cart</button>
      </div>
    </div>
    }
