# DEEP DIVE - Build a Porfolio Site using Gatsby

## What is Gatsby? https://www.gatsbyjs.com/docs/

Gatsby.js is a meta-framework built on top of React, specializing in producing fully interactive and fast-loading
websites.

Gatsby is known primarily for being a static site generator (SSG). A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time.

NOTE: Other rendering modes aside SSG have been introduced more recently in Gatsby 4 (https://www.gatsbyjs.com/blog/choosing-the-best-page-rendering-modes-for-your-gatsby-site/).

In Gatsby there is a build process that occurs in a Node.js runtime where many of the HTML pages for your application are generated.
## Tour of the Gatsby folder structure
### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.
``` .
    ├── README.md
    ├── package.json (list of project dependencies)
    ├── src 
    |    └── pages (file-system based routing)
    ├── gatsby-browser.js  lets you respond to Gatsby-specific events within the browser: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
    ├── gatsby-config.js **runs during build** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
    ├── gatsby-node.js **runs during build** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
    ├── gatsby-ssr.js https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
    ├── package-lock.json
    ├── node_modules (project dependencies)
    ├── .prettierrc
    ├── .gitignore
    └──LICENSE
```
## STEPS
1) Clone down project: `git clone git@github.com:d-sanderson/deepdive-gatsby-portfolio.git`

2) Checkout to the begin branch `git checkout begin`
    
3) Install initial project dependencies: `npm i`
   
4) Start the project (a gatsby development server): `npm run start`
   
5) Add the Gatsby and Gatsby Transformer Remark Plugins: `npm install gatsby-source-filesystem gatsby-transformer-remark`
 
 What is a plugin?
  
 Gatsby plugins are Node.js packages that you can add to your site. Plugins let you quickly add new features to your Gatsby site without needing to build them from scratch. There are a ton of Gatsby plugins that allow you to source data from different places (i.e CMSs, Markdown, spreadsheets, etc.)
 https://www.gatsbyjs.com/docs/conceptual/gatsby-jargon/#plugins

 `gatsby-source-filesystem` allows us to read files within our local filesystem i.e `/blog`

`gatsby-transformer-remark` transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.

5) Register File Source Plugin and Gatsby Transformer Plugins in `/gatsby-config.js`

```
// gatsby-config.js

module.exports = {
    plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // Footnotes mode (default: true)
          footnotes: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [],
        },
      },
  ],
}
```

6) Use GraphQL to write a query that returns a list of all our blog posts
   What is GraphQL? 
   GraphQL is a query language and server-side runtime for application programming interfaces (APIs) that prioritizes giving clients exactly the data they request and no more. GQL allows you to stitch together multiple data sources into a single API call.

   Gatsby come with a built in GraphQL layer 
  
   a) Open the GQL explorer at http://localhost:8000/_graphql and Explore a little
   
   b) Craft your GQL query 

   ```
   query BlogPosts {
    allFile(filter: {sourceInstanceName: {eq: "blog-posts"}}) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            path
            date
          }
          excerpt
        }
      }
    }
  }  
   ```

  c) use the code exporter in the top right, select Page Query

