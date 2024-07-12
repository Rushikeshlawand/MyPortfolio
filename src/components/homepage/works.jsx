import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Sciqus Infotech PVT.LTD</div>
							<div className="work-subtitle">
								Full Stack Web Developer
							</div>
							<div className="work-duration">Internship - 6 Months</div>
						</div>

						<div className="work">
							<img
								src="./logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">upGrad</div>
							<div className="work-subtitle">
								Full Stack Developer Course
							</div>
							<div className="work-duration">Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
