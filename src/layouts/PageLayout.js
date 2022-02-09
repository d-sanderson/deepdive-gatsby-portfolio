import React from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const PageLayout = ({ children }) => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <React.Fragment>
      <Nav
        links={[
          { title: "Blog", path: "/blog" },
          { title: "About", path: "/" },
        ]}
      />
      <main>{children}</main>
      <Footer>Made for Deep Dive! &copy;{year}</Footer>
    </React.Fragment>
  )
}

export default PageLayout
