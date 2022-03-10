// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <title>About Me</title>
        <Link href="/">Home</Link>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </main>
    </Layout>

  )
}
// Step 3: Export your component
export default AboutPage