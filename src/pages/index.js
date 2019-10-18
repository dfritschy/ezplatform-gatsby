import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'

const assetsUrl = process.env.GATSBY_ASSETS_URL

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {data.ezRepository.netgen.ngArticles.edges.map(document => (
            <article style={{marginBottom: `2rem`}}>
                <header>
                    <div><em>{document.node.tags}</em></div>
                    <h2>{document.node.title}</h2>
                </header>
                <img src={assetsUrl + document.node.image.variation.uri} alt={document.node.title}/>
                <div dangerouslySetInnerHTML={createMarkup(document.node.fullIntro)}/>
            </article>
        ))}
    </Layout>
);

export const query = graphql`
{
  ezRepository {
    netgen {
      ngArticles(last: 10, sortBy: _datePublished) {
        edges {
          node {
            title
            id
            _url
            fullIntro
            tags
            image {
              variation(identifier: i480) {
                uri
              }
            }
          }
        }
      }
    }
  }
}
`;

function createMarkup(snippet) {
    return {__html: snippet};
}

export default IndexPage;
