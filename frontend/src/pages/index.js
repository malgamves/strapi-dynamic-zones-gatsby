import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        strapi {
    portfolios {
      id
      Name
      Description
      LegoLand {
        ... on Strapi_ComponentModularImage {
          id
          __typename
          Caption
          Image {
            url
          }
        }
        ... on Strapi_ComponentModularQuote {
          id
          __typename
          Quote
          Quoter
        }
        ... on Strapi_ComponentModularSocialMedia {
          id
          __typename
          Link
          Site
        }
      }
    }
  }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        {data.strapi.portfolios.map((res, i) => (
          <div key={i}>
            <h1>Hi, I'm {res.Name}.</h1>
            <p>{res.Description}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            </div>
            {res.LegoLand.map((dz, j) => (
              <div key={j}>
                {dz.__typename === 'Strapi_ComponentModularSocialMedia' &&
                  <h2>I have <a href={dz.Link}>{dz.Site}</a> </h2>
                }
                {dz.__typename === 'Strapi_ComponentModularQuote' &&
                  <h2> "{dz.Quote}" by {dz.Quoter}.</h2>
                }
                {dz.__typename === 'Strapi_ComponentModularImage' &&
                  <div>
                      <img style={{maxWidth: 300}} src={dz.Image.url} alt={dz.Caption}/>
                      <h5>{dz.Caption}</h5>
                   </div> 
                }
              </div>
            ))}
          </div>
        ))}

      </Layout>
    )
    }

  />
)

export default IndexPage
