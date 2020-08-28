import React from 'react'
import classes from './Burger.module.scss'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
 
const burger = (props) => {
  let IngredientsArr = Object.keys(props.ingredients)
  .map((igKey)=> [...Array(props.ingredients[igKey])]
  .map((_, i)=> <BurgerIngredient key={igKey + i} type={igKey}/>))
  .reduce((arr, el)=> arr.concat(el), []);
  if(IngredientsArr.length === 0){
    IngredientsArr = 'Add Ingredients'
  }
  //console.log(IngredientsArr);
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {IngredientsArr}
        <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}
 
export default burger