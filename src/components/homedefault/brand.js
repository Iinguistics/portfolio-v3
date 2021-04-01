import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import Img from "gatsby-image";

const Brand = () => {
    const brandQueryData = useStaticQuery(graphql`
        query brandQuery {
            homedefaultJson(id: {eq: "brand"}) {
                brandGroup {
                    skill
                    image {
                        childImageSharp {
                            fixed(quality: 100, width: 87, height: 87) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)
    const BrandImage = brandQueryData.homedefaultJson.brandGroup;
    return (
        <div className="rn-brand-area rn-section-gapTop pb--200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title mb--40">
                            <h2 className="title">Skills <span className="bg">Technology</span></h2>
                        </div>
                        <div className="brand-list-wrapper">
                            {BrandImage.map((data, index) => (
                                <div className="single-image" key={index}>
                                    {data.skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Brand
