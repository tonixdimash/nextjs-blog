// To load global CSS to your application, we use only this file: "pages/_app.js". Its default export is a top-level React component that wraps all the pages in your application.

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
} 