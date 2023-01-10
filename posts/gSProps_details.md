---
title: 'getStaticProps Details'
date: '2022-12-22'
---

You can fetch the data from other sources, like an external **API endpoint**, and it’ll work just fine:

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}

You can also query the **database** directly:

import someDatabaseSDK from 'someDatabaseSDK'
const databaseClient = someDatabaseSDK.createClient(...)
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}

getStaticProps can only be exported from a **page**. You can’t export it from non-page files because React needs to have all the required data **before** the page is rendered.

**Since Static Generation** happens once at build time, it's not suitable for data that updates frequently or changes on every user request. In cases like this, where your data is likely to change, you can use **Server-side Rendering**.

To use Server-side Rendering, you need to export **getServerSideProps** instead of getStaticProps from your page.

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}

Time to first byte (**TTFB**) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a **CDN** without extra configuration.

The team behind Next.js has created a React hook for data fetching called **SWR**. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.

import useSWR from 'swr';
function Profile() {
  const { data, error } = useSWR('/api/user', fetch);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}