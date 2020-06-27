import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nate-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="about" />
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 className="page-header">It's more about me.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p className="page-body">
              I'm a Full Stack Web Developer living in Pasadena, CA.
            </p>
            <p className="page-body">
              I’ve been writing code professionally for 2 years and can’t get
              enough. I’m always looking to take on new projects or
              opportunities—if you’re interested in working with me, make sure
              to{" "}
              <Link to="/contact" className="page-link">
                drop me a line!
              </Link>
            </p>
            <p className="page-body">
              When I’m not banging out code I can be found hiking the local
              foothills with my wife Debbie or being walked around the
              neighborhood by our very opinionated dog Russell.
            </p>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Nate Micinski Headshot"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
