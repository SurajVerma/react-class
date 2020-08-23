import React from 'react'
import classes from './Burger.module.scss'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
 
const burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}
 
export default burger