import './IconSwitch.css';

export const IconSwitch = (props) =>{
    const { icon, onSwitch } = props;

    return <button className = {`icon ${icon}`} key ={crypto.randomUUID()} onClick={(e) => {
        e.preventDefault();
        onSwitch();
    }}><span className="material-icons">{icon}</span>
</button>
}
