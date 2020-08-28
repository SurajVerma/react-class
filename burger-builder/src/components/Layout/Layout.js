import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
    render(){
        return(
            <Aux >
                <Toolbar />
                <SideDrawer />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }
}

export default Layout;