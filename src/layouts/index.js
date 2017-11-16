import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './index.css'

const Template = ({ children }) => (
  <div>
    <Helmet>
      <title>Callly</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32.png"
      />

      <meta
        name="description"
        content="Callly, your personal calorie tracker."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://calllyapp.com" />
      <meta property="og:title" content="Callly" />
      <meta property="og:image" content="https://calllyapp.com/static/og.png" />
      <meta
        property="og:description"
        content="Callly, your personal calorie tracker."
      />
      <meta property="og:site_name" content="Callly" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@calllyapp" />
      <meta name="twitter:url" content="https://calllyapp.com" />
      <meta name="twitter:title" content="Callly" />
      <meta
        name="twitter:description"
        content="Callly, your personal calorie tracker."
      />
      <meta
        name="twitter:image"
        content="https://calllyapp.com/static/twitter.png"
      />
    </Helmet>
    {children()}
  </div>
)

Template.propTypes = {
  children: PropTypes.func
}

export default Template
