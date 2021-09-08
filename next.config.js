/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://paypal.me/cnradd',
                permanent: true,
            },  
            {
                source: '/:amount',
                destination: 'https://paypal.me/cnradd/:amount',
                permanent: true,
            }, 
        ]
    },
}
