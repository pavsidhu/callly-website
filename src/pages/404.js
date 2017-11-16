import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
  >
    <h1 style={{ marginBottom: 8 }}>Page not found</h1>
    <Link to="/">Go Home</Link>
  </div>
)

export default NotFoundPage
