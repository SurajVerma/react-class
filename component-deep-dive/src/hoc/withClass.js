import React from 'react';

// const aux = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WrappedComponent, className)=> (
    (props) => (<div className={className}><WrappedComponent {...props}/></div>)
    )

export default withClass;