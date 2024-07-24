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
								src="./432hz-capital.png"
								alt="432hz-capital"
								className="work-image"
							/>
							<div className="work-title">432Hz Capital</div>
							<div className="work-subtitle">
								Software Engineer | Kafka/Redshift/dbt Cloud/Terraform/AWS/Docker/Python
							</div>
							<div className="work-duration">May 2024 - Present</div>
							<div className="work-description">
								<ul>
									<li>Dockerized and managed cryptocurrency data pipelines (ETL, ELT) on AWS EC2, incorporating stream and batch processing via Kafka and Redshift for real-time and historical data feeds to quantitative traders.</li>
									<li>Administered AWS infrastructure (Redshift, EC2, VPC, Subnet) using Terraform; deployed Kafka services with Docker and managed 30 real-time data pipelines for L2 Orderbook and Ticker data.</li>
									<li>Implemented ELT pipelines for streaming data where data from exchange websockets was published to Kafka topics, exported to Redshift tables through subscribed containers, and transformed and materialized by dbt Cloud.</li>
									<li>Constructed ETL pipelines for historical data that retrieved full trading pair data under exchange API rate limits, processed with Pandas, and exported to Redshift tables, covering OHLCV, open interest, and funding rate data.</li>
								</ul>
							</div>
						</div>

						<div className="work">
							<img
								src="./bytoken.png"
								alt="bytoken"
								className="work-image"
							/>
							<div className="work-title">Rui Feng Global Consultancy</div>
							<div className="work-subtitle">
								Software Engineer | PostgreSQL/Kubernetes/Looker/Python/Docker
							</div>
							<div className="work-duration">Jun 2023 - Oct 2023</div>
							<div className="work-description">
								<ul>
									<li>Developed cryptocurrency data pipelines for batch processing, leveraged statistical insights from historical data to fine-tune hyperparameters in CTA trading strategies, enhancing annualized returns.</li>
									<li>Designed and managed ETL pipelines on Azure Kubernetes Service to aggregate real-time and historical data from exchanges, assign scores from -10 to +10 based on price percentage changes, and export data to PostgreSQL.</li>
									<li>Imported time-series data from PostgreSQL into Looker, employing line charts to visualize daily distribution of cryptocurrencies across various score ranges and pinpointing critical trend reversal points to gain insights.</li>
									<li>Employed Bayesian optimization to fine-tune CTA strategies, leading to a 15% increase in annualized returns (from 1.53% to 16.8%) and a significant 56% reduction in maximum drawdown (from 64.44% to 8.46%).</li>
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
							<div className="work-duration">Mar 2019 - July 2022</div>
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
