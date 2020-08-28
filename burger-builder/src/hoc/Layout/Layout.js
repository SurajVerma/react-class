import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// const layout = (props) => (
//     <Aux>
//         <Toolbar/>
//         <SideDrawer/>
//         <main className={classes.content}>
//             {props.children}
//         </main>
//     </Aux>
// );

class Layout extends React.Component{
    state ={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = (props) => {
        this.setState({ showSideDrawer: false})
    }

    sideDrawerToggleHandler = (props) => {
        this.setState((prevState) => {
            return{showSideDrawer: !prevState.showSideDrawer}
        })
    }


    render(){
        return(
            <Aux >
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }
}

export default Layout;