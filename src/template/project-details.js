import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Image from '../elements/image';
import { FiList, FiGithub, FiActivity } from 'react-icons/fi';
import Layout from '../components/layout';
import { Link } from 'gatsby';

import techFactoryMp4 from '../data/project/video/tech-factory.mp4';
import hairMp4 from '../data/project/video/hair-salon.mp4';
import stockMp4 from '../data/project/video/stock-project.mp4';
import algoMp4 from '../data/project/video/algo-archive.mp4';
import astroMp4 from '../data/project/video/astro-space.mp4';
import naturaMp4 from '../data/project/video/natura.mp4';
import forkMp4 from '../data/project/video/fork.mp4';
import rolodexMp4 from '../data/project/video/rolodex-preview.mp4';
import hboMaxMp4 from '../data/project/video/hbo-max-clone.mp4';

const ProjectDetails = ({ data }) => {
	const projectData = data.projectJson;
	const projectImage = data.projectJson.features;

	const [mp4, setMp4] = useState('');

	const fetchMp4 = () => {
		if (projectData.title === 'Tech Factory') {
			setMp4(techFactoryMp4);
		} else if (projectData.title === 'Hair') {
			setMp4(hairMp4);
		} else if (projectData.title === 'Stock Search') {
			setMp4(stockMp4);
		} else if (projectData.title === 'Algorithm Archive') {
			setMp4(algoMp4);
		} else if (projectData.title === 'HBO Max Clone') {
			setMp4(hboMaxMp4);
		} else if (projectData.title === 'Natura') {
			setMp4(naturaMp4);
		} else if (projectData.title === 'Fork Restaurant') {
			setMp4(forkMp4);
		} else if (projectData.title === 'Rolodex') {
			setMp4(rolodexMp4);
		}
	};

	useEffect(() => {
		fetchMp4();
	}, []);

	return (
		<Layout>
			<div className='rn-project-details-area rn-section-gap bg-color-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='inner'>
								<div className='portfolio-content'>
									<div className='row'>
										<div className='col-lg-12 col-md-12 col-12'>
											<div className='content-left'>
												<Link to='/#portfolio' className='link-button mb-4'>
													<span>Go Back</span>
												</Link>
												<div className='page-top'>
													<h1 className='title_holder'>{projectData.title}</h1>
												</div>
												<h3 className='mt--20'>Details</h3>
												<ul className='list_holder'>
													<li>
														<span className='icon'>
															<FiList />
															Stack:
														</span>
														<span className='projectinfo'>
															{projectData.category}
														</span>
													</li>
													{projectData.live === 'N/A' ? (
														<li>
															<span className='icon'>
																<FiGithub />
																Code:
															</span>
															<span className='projectinfo'>
																<a
																	href={projectData.repo}
																	target='_blank'
																	rel='noopener noreferrer'
																>
																	Visit Repo
																</a>
															</span>
														</li>
													) : (
														<>
															<li>
																<span className='icon'>
																	<FiGithub />
																	Code:
																</span>
																<span className='projectinfo'>
																	<a
																		href={projectData.repo}
																		target='_blank'
																		rel='noopener noreferrer'
																	>
																		Visit Repo
																	</a>
																</span>
															</li>
															{projectData.live ? (
																<li>
																	<span className='icon'>
																		<FiActivity />
																		Live Site:
																	</span>
																	<span className='projectinfo'>
																		<a
																			href={projectData.live}
																			target='_blank'
																			rel='noopener noreferrer'
																		>
																			Visit Site
																		</a>
																	</span>
																</li>
															) : null}
														</>
													)}
												</ul>
												<p className='mt--20'>{projectData.body}</p>
											</div>
										</div>
									</div>
								</div>

								<div className='thumbnail mt--90 mt_md--40 mt_sm--40 '>
									<video autoPlay muted loop className='w-100'>
										{' '}
										<source src={mp4} type='video/mp4' />
										Sorry, your browser doesn't support embedded videos.
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($id: String!) {
		projectJson(id: { eq: $id }) {
			id
			title
			body
			category
			repo
			live
			imgesBY
			featured_image {
				childImageSharp {
					fluid(maxHeight: 1000, maxWidth: 1920, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						presentationHeight
						presentationWidth
					}
				}
			}
			features {
				image {
					childImageSharp {
						fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
							presentationWidth
							presentationHeight
						}
					}
				}
			}
		}
	}
`;

export default ProjectDetails;
