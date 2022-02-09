import React from "react"

// an example of destructing the props object
const Nav = ({ links }) => {
  return (
    <nav>
      {/* Extra credit: replace the anchor tags with Gatsby Links 
      docs: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#replace-a-tags-with-the-link-tag-for-local-links */}
      {links.map(link => (
        <a href={link.path}>{link.title}</a>
      ))}
    </nav>
  )
}

export default Nav
