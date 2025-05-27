import { JSX } from "./base.js";
import { CONFIG } from "./config.js";

export default JSX("aside", {
	class: "sidebar",
	style: {
		width: "280px",
		backgroundColor: "#2c3e50",
		color: "white",
		padding: "30px 25px",
		fontFamily: "Arial, sans-serif",
		minHeight: "100vh",
		boxSizing: "border-box",
	},
	children: [
		// Profile Image Section
		JSX("div", {
			class: "profile-section",
			style: {
				textAlign: "center",
				marginBottom: "40px",
			},
			children: [
				JSX("div", {
					class: "profile-image",
					style: {
						width: "120px",
						height: "120px",
						margin: "0 auto",
						borderRadius: "50%",
						overflow: "hidden",
						border: "4px solid white",
					},
					children: [
						JSX("img", {
							src: CONFIG.image,
							alt: `${CONFIG.name} ${CONFIG.surname} Profile`,
							style: {
								width: "100%",
								height: "100%",
								objectFit: "cover",
							},
						}),
					],
				}),
			],
		}),

		// Contact Section
		JSX("div", {
			class: "contact-section",
			style: {
				marginBottom: "40px",
			},
			children: [
				JSX("h3", {
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						marginBottom: "15px",
						letterSpacing: "1px",
					},
					children: "CONTACT",
				}),
				JSX("hr", {
					style: {
						border: "none",
						borderTop: "2px solid white",
						margin: "0 0 20px 0",
						width: "60px",
					},
				}),
				JSX("div", {
					class: "contact-item",
					style: {
						display: "flex",
						alignItems: "center",
						marginBottom: "12px",
						fontSize: "14px",
					},
					children: [
						JSX("span", {
							style: {
								marginRight: "10px",
								fontSize: "16px",
							},
							children: "📞",
						}),
						JSX("span", { children: CONFIG.contact.number }),
					],
				}),
				JSX("a", {
					class: "contact-item",
					href: `mailto:${CONFIG.contact.email}`,
					style: {
						display: "flex",
						alignItems: "center",
						marginBottom: "12px",
						fontSize: "14px",
						color: "white",
						textDecoration: "none",
					},
					children: [
						JSX("span", {
							style: {
								marginRight: "10px",
								fontSize: "16px",
							},
							children: "✉️",
						}),
						JSX("span", { children: CONFIG.contact.email }),
					],
				}),
				JSX("div", {
					class: "contact-item",
					style: {
						display: "flex",
						alignItems: "center",
						marginBottom: "12px",
						fontSize: "14px",
					},
					children: [
						JSX("span", {
							style: {
								marginRight: "10px",
								fontSize: "16px",
							},
							children: "📍",
						}),
						JSX("span", { children: CONFIG.contact.address }),
					],
				}),
				JSX("div", {
					class: "contact-item",
					style: {
						display: "flex",
						alignItems: "center",
						marginBottom: "12px",
						fontSize: "14px",
					},
					children: [
						JSX("span", {
							style: {
								marginRight: "10px",
								fontSize: "16px",
							},
							children: "🌐",
						}),
						JSX("span", { children: CONFIG.contact.website }),
					],
				}),
			],
		}),

		// Education Section
		JSX("div", {
			class: "education-section",
			style: {
				marginBottom: "40px",
			},
			children: [
				JSX("h3", {
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						marginBottom: "15px",
						letterSpacing: "1px",
					},
					children: "EDUCATION",
				}),
				JSX("hr", {
					style: {
						border: "none",
						borderTop: "2px solid white",
						margin: "0 0 20px 0",
						width: "60px",
					},
				}),
				...CONFIG.education.map((edu) =>
					JSX("div", {
						class: "education-item",
						style: {
							marginBottom: "20px",
						},
						children: [
							JSX("div", {
								style: {
									fontSize: "12px",
									fontWeight: "bold",
									marginBottom: "5px",
								},
								children: `${edu.start} - ${edu.end}`,
							}),
							JSX("div", {
								style: {
									fontSize: "14px",
									fontWeight: "bold",
									marginBottom: "3px",
								},
								children: edu.name.toUpperCase(),
							}),
							JSX("div", {
								style: {
									fontSize: "12px",
									marginBottom: "3px",
								},
								children: edu.degree,
							}),
							...(edu.gpa
								? [
										JSX("div", {
											style: {
												fontSize: "12px",
												fontStyle: "italic",
											},
											children: `GPA: ${edu.gpa}/4.0`,
										}),
									]
								: []),
						],
					}),
				),
			],
		}),

		// Skills Section
		JSX("div", {
			class: "skills-section",
			style: {
				marginBottom: "40px",
			},
			children: [
				JSX("h3", {
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						marginBottom: "15px",
						letterSpacing: "1px",
					},
					children: "SKILLS",
				}),
				JSX("hr", {
					style: {
						border: "none",
						borderTop: "2px solid white",
						margin: "0 0 20px 0",
						width: "60px",
					},
				}),
				JSX("ul", {
					style: {
						listStyle: "none",
						padding: "0",
						margin: "0",
					},
					children: CONFIG.skills.map((skill) =>
						JSX("li", {
							style: {
								fontSize: "14px",
								marginBottom: "8px",
								paddingLeft: "15px",
								position: "relative",
							},
							children: [
								JSX("span", {
									style: {
										position: "absolute",
										left: "0",
										top: "0",
									},
									children: "•",
								}),
								skill,
							],
						}),
					),
				}),
			],
		}),

		// Languages Section
		JSX("div", {
			class: "languages-section",
			children: [
				JSX("h3", {
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						marginBottom: "15px",
						letterSpacing: "1px",
					},
					children: "LANGUAGES",
				}),
				JSX("hr", {
					style: {
						border: "none",
						borderTop: "2px solid white",
						margin: "0 0 20px 0",
						width: "60px",
					},
				}),
				JSX("ul", {
					style: {
						listStyle: "none",
						padding: "0",
						margin: "0",
					},
					children: CONFIG.languages.map((language) =>
						JSX("li", {
							style: {
								fontSize: "14px",
								marginBottom: "8px",
								paddingLeft: "15px",
								position: "relative",
							},
							children: [
								JSX("span", {
									style: {
										position: "absolute",
										left: "0",
										top: "0",
									},
									children: "•",
								}),
								`${language.name} (${language.level})`,
							],
						}),
					),
				}),
			],
		}),
	],
});
