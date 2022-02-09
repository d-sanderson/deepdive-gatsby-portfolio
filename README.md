# What is Gatsby? https://www.gatsbyjs.com/docs/

Gatsby.js is a meta-framework built on top of React, specializing in producing fully interactive and fast-loading
websites.

Gatsby is known primarily for being a static site generator (SSG). A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time.

NOTE: Other rendering modes aside SSG have been introduced more recently in Gatsby 4 (https://www.gatsbyjs.com/blog/choosing-the-best-page-rendering-modes-for-your-gatsby-site/).

In Gatsby there is a build process that occurs in a Node.js runtime where many of the HTML pages for your application are generated.
# Tour of the Gatsby folder structure
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.
    .
    ├── README.md
    ├── package.json (list of project dependencies)
    ├── src 
    |    └── pages (file-system based routing)
    ├── gatsby-browser.js https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
    ├── gatsby-config.js **runs during build**  https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
    ├── gatsby-node.js **runs during build** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
    ├── gatsby-ssr.js https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
    ├── package-lock.json
    ├── node_modules (project dependencies)
    ├── .prettierrc
    ├── .gitignore
    └──LICENSE

# STEPS
1) Clone down project: `git clone git@github.com:d-sanderson/deepdive-gatsby-portfolio.git`
   
2) Install initial project dependencies: `npm i`
   
3) Start the project (a gatsby development server): `npm run start`
   
4) Add the Netlify CMS Plugin to your Gatsby app `npm install netlify-cms-app gatsby-plugin-netlify-cms`
 What is a plugin? https://www.gatsbyjs.com/docs/conceptual/gatsby-jargon/#plugins
  
 Gatsby plugins are Node.js packages that you can add to your site. Plugins let you quickly add new features to your Gatsby site without needing to build them from scratch. There are a ton of Gatsby plugins that allow you to source data from different places (i.e CMSs, Markdown, spreadsheets, etc.)

5) Register Netlify CMS Plugin (`gatsby-plugin-netlify-cms`) in `gatsby-config.js`

```
// gatsby-config.js

module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
}
```

6) Configure Netlify CMS  `/static/admin/config.yml`

7) Use GraphQL to get data from Netlify CMS