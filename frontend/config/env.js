import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const {
	NODE_ENV,
	DOMAIN_NAME,

} = publicRuntimeConfig;

const config = {
	nodeEnv: NODE_ENV,
	domainName: DOMAIN_NAME,
};

export default config;
