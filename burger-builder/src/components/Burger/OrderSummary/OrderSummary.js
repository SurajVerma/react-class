import React from 'react'
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'
 
class OrderSummary extends React.Component{
  componentDidUpdate(){
    console.log('OrderSummary, updated');
  }

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    });
    return (
      <Aux>
        <h3>Your order summary</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Price: {this.props.price}</strong></p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}
 
export default OrderSummary;