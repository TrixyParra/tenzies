
export default function Die(props) {

    return (
        <div 
            className="die-face" 
            style={{ backgroundColor: props.isHeld ? "#59E391" : "#fff" }}
        >
            <h2 className="die-number">
                {props.value}
            </h2>
        </div>
    )
}