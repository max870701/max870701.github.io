import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="educations">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="education-body">
						<div className="education">
							<img
								src="./sjsu.jpeg"
								alt="sjsu"
								className="education-image"
							/>
							<div className="education-title">San Jose State University</div>
							<div className="education-subtitle">
								Master of Science in Engineering
							</div>
							<div className="education-duration">Aug 2022- May 2024</div>
						</div>

						<div className="education">
							<img
								src="./sysu.jpeg"
								alt="sysu"
								className="education-image"
							/>
							<div className="education-title">Sun Yat-sen University</div>
							<div className="education-subtitle">
								Bachelor of Science in Eletronics
							</div>
							<div className="education-duration">Aug 2014 - Jun 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
