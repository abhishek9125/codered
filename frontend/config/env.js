import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const {
	API_URL,
	DOMAIN_NAME,
	NODE_ENV,

} = publicRuntimeConfig;

const config = {
	apiUrl: API_URL,
	domainName: DOMAIN_NAME,
	nodeEnv: NODE_ENV,
};

export default config;
