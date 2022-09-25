import React from "react";
import {withToggler} from './HOCs/withToggler'

function Favourite(props) {

    // const [isFavorited, setIsFavourtied] = React.useState(false);

    // function toggleFavorite(){
    //     setIsFavourtied(s => !s)
    // }

    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span onClick={props.toggle}>
                    {props.on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    )
}

export default withToggler(Favourite, { defaultOnValue: false })