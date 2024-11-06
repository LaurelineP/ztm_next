/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opendoodles.s3-us-west-1.amazonaws.com',
			}
		]
	}
};

export default nextConfig;
