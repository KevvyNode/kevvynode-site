import Header from '../components/header';
import Footer from '../components/footer';
import Body from '../components/body';
import Head from 'next/head';

function HomePage() {
    return (
    <>
    <Head>
        <title>KevvyNode - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
        <Header />
        <div>
            <Body />
        </div>
        <Footer />
    </>
    );
}

export default HomePage;