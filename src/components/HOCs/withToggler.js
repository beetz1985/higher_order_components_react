import React from "react";


function Toggler(props) {
    
    const [state, setState] = React.useState(props.defaultOptions.defaultOnValue)
    
    function toggle() {
        setState(s=>!s);
    }

    const Component = props.component;
    // const {component: Component, defaultOnValue, ...props} = props;

    return (
        <Component on={state} toggle={toggle} {...props}/>
    )
}


export function withToggler(component, options) {
    return function(props) {
        return <Toggler component={component} {...props} defaultOptions={options}/>
    }
}