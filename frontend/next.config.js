require("dotenv").config();

const nextConfig = {

	swcMinify: true,
	publicRuntimeConfig: {
		DOMAIN_NAME: process.env.DOMAIN_NAME,
		NODE_ENV: process.env.NODE_ENV,
	}


}

module.exports = nextConfig
