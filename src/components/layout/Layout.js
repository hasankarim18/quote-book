import React, { Fragment } from 'react'
import classNamees from './Layout.module.css'
import MainNavigation from './MainNavigation'


const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classNamees.main}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout