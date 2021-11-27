import Head from 'next/head'
import styled from 'styled-components'
import { AppBar } from '../appbar'

const Layout = styled.div`
    max-width: 460px;
    margin: 3rem auto 0;
    padding: 3rem 2rem;
    background-color: white;
    border:3px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.125);

`

function AuthPageLayout({children, title}) {
    return (
        <>
        <Head>
        <title>{title}</title>
        </Head>
        <>
        <AppBar/>
        <Layout>
            <main>{children}</main>  
        </Layout>
        </>
        </>
    )
}

export default AuthPageLayout


 