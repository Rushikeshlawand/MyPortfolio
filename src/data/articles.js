import React from "react";
function article_1() {
	return {
		date: "7 May 2024",
		title: "The Future of Full-Stack MERN Development",
		description:"The MERN stack (MongoDB, Express.js, React, Node.js) has become one of the most popular choices for full-stack development, offering a powerful combination of technologies for building dynamic and scalable web applications. As we move into the future, the role of MERN developers is expected to evolve with new trends and technological advancements. This article explores the future prospects of full-stack MERN development and the skills that developers need to stay ahead in the industry.",
		keywords: [
			"",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}
function article_2() {
	return {
		date: "14 May 2024",
		title: "Full-Stack Development for Startups: Advantages and Challenges",
		description:
			"Startups are known for their dynamic environments, limited resources, and the need for rapid development and deployment of products. In this context, full-stack developers—who can handle both front-end and back-end tasks—are particularly valuable. This article explores the advantages and challenges of relying on full-stack developers in startup settings and provides insights into how startups can make the most of this versatile talent.",
		style: ``,
		keywords: [
			"",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 2</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
