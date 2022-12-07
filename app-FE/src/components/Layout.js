import React, { Fragment } from 'react';
import BasicBreadcrumbs from './breadcrumbs/Breadcrumbs'
import BasicAppBar from './appBar/AppBar';
import './layout.scss';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <nav className="navbar">
                <BasicAppBar />
            </nav>
            <BasicBreadcrumbs />
            <main>{children}</main>
        </Fragment>
    );
};
export default Layout;