import Head from "next/head";
import React from "react";

import styles from './privacy.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className={styles.privacy}>

        <h1>Privacy Policy</h1>

        <p>
          This website tracks users using the third-party vendor: Google so as to serve ads on blog articles on this website.
          Other pages should not inlcude ads or third-party tracking code.
        </p>

        <h3>Disclaimers:</h3>
        <ul>
          <li>
            Third party vendors, including Google, use cookies to serve ads based on a user's previous visits to your website or other websites.
          </li>
          <li>
            Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
          </li>
          <li>
            Users may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads">Ads Settings</a>.
            (Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for personalised advertising by visiting <a href="www.aboutads.info">www.aboutads.info</a>.)
          </li>
        </ul>

        <strong>
          If you would like to opt out of personalized advertisements from Google, you can do so by visiting <a href="https://www.google.com/settings/ads">Ads Settings</a>.
        </strong>
      </div>
    </>
  )
}