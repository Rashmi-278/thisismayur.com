import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Mayur from "../images/mayur2.jpg"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Home" description="About mayur" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap  justify-evenly">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0 py-10">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-blue-600 sm:text-4xl">
              Hello, I'm Mayur.{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl"></h2>
            <div className="mt-4 leading-loose">
              I'm an aspiring entrepreneur who's currently working as an
              Assistant manager at Zerodha. Currently based in Hubli, India.
              Entrepreneurship and financial markets are two things I am
              passionate about. I spend a lot of time studying and researching
              entrepreneurship and economics.
              <br />
              <br />
              Outside work I particularly enjoy Working out, watching
              documentaries & Collecting coins. As an infographics enthusiast, I
              share my thoughts and ideas visually. You can view them on my
              blog.
              <br />
              <br />
              Let&apos;s connect:
              <br />
              <a
                href="mailto:kreatonmayur@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                kreatonmayur@gmail.com
              </a>
            </div>
          </div>
          <img src={Mayur} alt="image" width="240" height="350" className=' border-blue-600 border-4 rounded-md' ></img>

          {/* <div className=" flex flex-wrap justify-items-end ">

            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Mayur"
              className="rounded-md shadow-md border-8 border-blue-600"
            />
          </div> */}
        </div>
      </div>
    </div>
  </Layout>
)
//<Newsletter/> component exists
export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "mayur2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, maxHeight: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
//maxWidth: 250, maxHeight: 480, quality: 100
