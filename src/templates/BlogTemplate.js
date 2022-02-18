import React from "react"

function BlogTemplate({ pageContext }) {
  return (
    <div>
      <h1>BlogTemplate</h1>
      {JSON.stringify(pageContext, null, 2)}
    </div>
  )
}

export default BlogTemplate
