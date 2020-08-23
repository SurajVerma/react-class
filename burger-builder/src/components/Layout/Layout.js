import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.scss';

const layout = (props) => (
    <Aux>
        <div>Logo, Toolbar, Sidebar, Backdrop </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;