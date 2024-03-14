import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./bytoken.png"
								alt="bytoken"
								className="work-image"
							/>
							<div className="work-title">ByToken</div>
							<div className="work-subtitle">
								Software Engineer | Python/Docker/Kubernetes/Azure/Looker
							</div>
							<div className="work-duration">Jun 2023 - Oct 2023</div>
							<div className="work-description">
								<ul>
									<li>Developed an automated system for retrieving cryptocurrency price data, leveraged statistical insights from historical price data to fine-tune hyperparameters in quantitative trading strategies, yielding an augmented annualized return.</li>
									<li>Dockerized an automated price data retrieval system and orchestrated it with Kubernetes, fetching the latest and 24-hour-old prices of 100 cryptocurrencies every ten minutes, computing percentage changes, partitioning them into a score range from -10 to +10, and exporting the DataFrame to the corresponding Google Sheets.</li>
									<li>Imported time-series score distribution data (increasing by 144 rows per day) from Google Sheets into Google Looker Studio, employing line charts to visualize the daily distribution of cryptocurrencies across various score ranges and pinpointing critical trend reversal points for quantitative trading strategy development.</li>
									<li>Employed Bayesian optimization to optimize trading strategy parameters, leading to a 15% increase in annualized returns (from 1.53% to 16.8%) and a significant 56% reduction in maximum drawdown (from 64.44% to 8.46%), thereby addressing the low-performance issue in the strategy.</li>
								</ul>
							</div>
						</div>

						<div className="work">
							<img
								src="./fairpower.png"
								alt="fairpower"
								className="work-image"
							/>
							<div className="work-title">Fair Power Technologies</div>
							<div className="work-subtitle">
								Software Engineer | Node.js/React/MongoDB/Express/RESTful API/AWS
							</div>
							<div className="work-duration">Jun 2023 - Oct 2023</div>
							<div className="work-description">
								<ul>
									<li>Directed Agile team of 6 in building an e-commerce system with MongoDB, Express , React, Node.js, and AWS (EC2, S3), fostering teamwork and efficient coordination through Git/GitHub.</li>
									<li>Fortified e-commerce security by combining encrypted payment systems and implementing JWT and OAuth for authentication, elevating transaction completion rates by 25% and reducing security incidents by 51%.</li>
									<li>Developed a responsive React user interface with Redux Toolkit for optimized state management, boosting engagement with intuitive navigation and live updates, leading to a 17% rise in conversions.</li>
								</ul>
								<ul>
									<li>Collaborated with 5 developers to build a Content Management System, facilitating teamwork through empowering administrators to execute concurrent CRUD operations with transaction support.</li>
									<li>Accomplished Express middleware-based access controls for administrators, securing tailored permissions, data security, and regulatory compliance, advancing system integrity and content management efficiency by 31%.</li>
									<li>Integrated CKEditor with React, incorporating automated image optimization and a drag-and-drop interface, boosting managerial efficiency by 47% through refined UI, streamlined state management, and augmented content management productivity.</li>
								</ul>
							</div>
						</div>

						<div className="work">
							<img
								src="./eth.png"
								alt="skywalker"
								className="work-image"
							/>
							<div className="work-title">Guangzhou Skywalker Network Technology</div>
							<div className="work-subtitle">
								Software Engineer | Python/Solidity/GCP
							</div>
							<div className="work-duration">Nov 2018 - Feb 2019</div>
							<div className="work-description">
								<ul>
									<li>Managed backend systems for cryptocurrency exchange, including consolidation of funds from cold and hot wallets, disaster recovery planning, and risk management for exchange funds.</li>
									<li>Maintained trading system for exchange, ensuring its stable operation, managing range of tradable assets, price ranges, and trading volume limits to meet market demand and exchange goals.</li>
									<li>Optimized backtesting system, including incorporating transaction costs and slippage to accurately simulate real-world trading conditions, and calculating correct PnL for each trade to assess profitability of trading strategy, increasing 35% performance.</li>
									<li>Developed Commodity Trading Advisor(CTA) Strategies for BTC/USDT with 8% APY and 2.5% maximum drawdown.</li>
								</ul>
							</div>
						</div>

						<div className="work">
							<img
								src="./btc.png"
								alt="evoblock"
								className="work-image"
							/>
							<div className="work-title">Guangzhou EvoBlock Technology</div>
							<div className="work-subtitle">
								Co-founder | Python/Node.js/Solidity/GCP
							</div>
							<div className="work-duration">Apr 2018 - Oct 2018</div>
							<div className="work-description">
								<ul>
									<li>Built quantitative trading interfaces, in Python, for Guangzhou Shining Midas Investment Management, with APIs in Binance cryptocurrency exchange.</li>
									<li>Automated deployment of smart contracts on Ethereum Rinkeby Testnet using Infura APIs and Truffle framework (JavaScript), with use of a mnemonic phrase, saving 90% time of deployment.</li>
									<li>Delivered bi-weekly lectures on foundational principles and knowledge of Bitcoin and Ethereum to Blockchain Club at Sun Yat-sen University, resulting in a demonstrable impact on over 40 students.</li>
								</ul>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
