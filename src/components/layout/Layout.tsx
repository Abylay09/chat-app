import Header from 'components/ui/Header';
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, HeaderWrapper } from 'styles/UiStyles';

function Layout() {
    return (
        <Container>
            <Header/>
            <Outlet />
        </Container>
    )
}

export default Layout;