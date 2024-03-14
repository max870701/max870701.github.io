const INFO = {
	main: {
		title: "Cheng-Yu Hsieh's Portfolio",
		name: "Cheng-Yu Hsieh",
		email: "max870701@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/xiecrypto1996",
		github: "https://github.com/max870701",
		linkedin: "https://linkedin.com/in/maxwell1996",
	},

	homepage: {
		title: "Software Engineer & Blockchain Developer",
		description:
			"Cheng-Yu Hsieh is a versatile software engineer and blockchain developer with deep expertise in a wide range of technologies including Python, Docker, Kubernetes, Azure, Looker, Node.js, React, MongoDB, Express, RESTful API, Solidity, Google Cloud Platform (GCP), Django, SQLite, AWS, Hardhat, and Ethers. He excels in developing scalable web applications, automated cryptocurrency systems, and blockchain solutions, enhancing trading strategies, security, efficiency, and user engagement. With a strong foundation in both software engineering and blockchain, Cheng-Yu offers comprehensive services from predictive modeling to NFT minting, all while embracing new challenges and growth opportunities in tech. His work ethic and diverse skill set enable him to deliver innovative solutions across various sectors.",
	},

	about: {
		title: "Hi 👋, I'm Cheng-Yu Hsieh",
		description:
			"A versatile software engineer and blockchain developer with deep expertise in a wide array of technologies including Python, Docker, Kubernetes, Azure, Looker, Node.js, React, MongoDB, Express, RESTful API, Solidity, Google Cloud Platform (GCP), Django, SQLite, AWS, Hardhat, and Ethers. I excel in developing scalable web applications, automated cryptocurrency systems, and blockchain solutions, aiming to enhance trading strategies, security, efficiency, and user engagement. With a strong foundation in both software engineering and blockchain, I offer comprehensive services from predictive modeling to NFT minting. I am always eager to embrace new challenges and growth opportunities in tech. My work ethic and diverse skill set enable me to deliver innovative solutions across various sectors.",
	},

	articles: {
		title: "Articles",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Full Stack Real Estate Marketplace",
			description: "Focusing on user security and operational efficiency. Incorporated advanced solutions like Proxy and Fetch API for security, JWT for authentication, and Firebase for image storage, all deployed on Render. These technologies were strategically selected and integrated to enhance the application's security, improve loading speeds, and ensure seamless scalability and user engagement without sacrificing performance.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Demo",
			link: "https://maxwell-real-estate.onrender.com/",
		},

		{
			title: "Full Stack NFT Minting Service",
			description:
				"Developed and deployed a user-friendly NFT minting service, utilizing React and the Hardhat framework for the frontend, and Solidity for smart contract creation on the Ethereum Goerli Testnet. This project significantly enhanced the user experience by enabling easy wallet connections and fast NFT minting, while also improving NFT loading speed and visual quality through optimized on-chain SVGs and metadata.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Demo",
			link: "https://nft-minting-service.onrender.com/",
		},

		{
			title: "Tech Frontier",
			description:
				"A full-stack website built with Django, Tech Frontier offers features like user registration, article publishing, and commenting to share AI and Blockchain news. Backend optimizations to SQLite enhance data management and query efficiency, while RESTful API integration and CSRF protection improve security and site performance, utilizing template inheritance and context processors for a streamlined user experience.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Demo",
			link: "https://max850701.pythonanywhere.com/",
		},

		{
			title: "Reentrancy Attack Implementation & Defense Strategies",
			description:
				"Conducted a reentrancy attack on Ethereum's Sepolia Testnet, exploiting a smart contract vulnerability to drain funds. Implemented defense methods, including the Checks-Effects-Interactions (CEI) Pattern and Mutex Modifier in the victim's contract, to prevent future attacks by updating balances before transfers and blocking reinvocation with a mutex lock.",
			logo: "./solidity.png",
			linkText: "View Tutorial",
			link: "https://drive.google.com/file/d/145D6hclSfz4CKoyPCWOndA4gf1tSyUyh/view",
		},

		{
			title: "Delegatecall Attack Implementation & Defense Strategies",
			description:
				"Executed a Delegatecall Attack on Ethereum's Sepolia Testnet, leveraging delegatecall's unique context and storage slot mappings to take over a smart contract. Countermeasures included implementing access control to restrict function execution to authorized users and limiting executable functions through a whitelist, effectively reducing the attack surface.",
			logo: "./solidity.png",
			linkText: "View Tutorial",
			link: "https://drive.google.com/file/d/1qte84RE7qtPFJEZRe_lxZLlq89AdgamH/view",
		},
	],
};

export default INFO;
