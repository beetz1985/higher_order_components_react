import React from "react";
import {withToggler} from './HOCs/withToggler'

function Menu(props) {

    // const [showMenu, setShowMenu] = React.useState(true)

    // function handleToggle() {
    //     setShowMenu((s)=>!s)
    // }
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <div>Your Profile</div>
                <div>Your Repositories</div>
                <div>Your Stars</div>
                <div>Your Gists</div>
            </nav>
        </div>
    )
}

export default withToggler(Menu, { defaultOnValue: true })