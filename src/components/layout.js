import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Header from './header'
import MobileHeader from './mobileheader'
import { ParallaxProvider } from 'react-scroll-parallax';
import './layout.css'
import styles from '../sass/layout.module.sass'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <MobileHeader />
        <ParallaxProvider>
            <div className = {styles.layout}
            >
              {children}
              <Footer />
            </div>
        </ParallaxProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
