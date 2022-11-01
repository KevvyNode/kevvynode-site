import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head';
import '../css/services.module.css';



function services() {
    return (
        <>
    <Head>
        <title>KevvyNode - Services</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
        <Header></Header>
        <div id="services-block">
            <p>test</p>
        </div>
        <Footer></Footer>
        </>
    )

}

export default services;