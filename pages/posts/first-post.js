import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layouts";
// import Script from "next/script";

const MyProfile = () => (
    <Image
        src="/images/profile.jpg"
        width={144}
        height={144}
        alt="my photo"
    />
);

export default function FirstPost() {
    return (
        <Layout>
            <Head> {/* To edit the browser tab */}
                <title>First Post</title>
                {/* <Script 
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload" // it says to Next.js to load this script lazily during browser idle time
                    onLoad={() => console.log('script loaded correctly, window.FB has been populated') // onLoad is used to run any JS code immediately after the script has finished loading
                    }
                /> */}
            </Head>
            <h1>First Post</h1>

            {/* The Link component enables client-side navigation between two pages in the same Next.js app */}
            <h2><Link href="/">Back to Home</Link></h2>

            <MyProfile />
            
        </Layout>
    );
}