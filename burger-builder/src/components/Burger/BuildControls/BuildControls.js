import React from 'react'
import classes from './BuildControls.module.scss'
import BuildControl from './BuildControl/BuildControl' 

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]
const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Price: <strong>&#x20B9; {props.price}</strong></p>
      {controls.map(ctrls => <BuildControl key={ctrls.label} label={ctrls.label} added={() => props.ingredientAdded(ctrls.type)} removed={() => props.ingredientRemoved(ctrls.type)} disabled={props.disabled[ctrls.type]}/>)}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>ORDER NOW</button>
    </div>
  );
};
 
export default BuildControls