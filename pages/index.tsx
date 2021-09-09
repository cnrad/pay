import styled from 'styled-components';
import Head from 'next/head';

export default function Home() {

    //thanks alistair vvv
    addEventListener('fetch', (event: any) => {
        event.respondWith(handleRequest(event.request));
    });

    const document = `
        <!DOCTYPE html>
        <html>
                <head>
                        <title>pay.cnrad.dev</title>
                        <meta name="theme-color" content="#4284f5" />
                        <meta name="og:description" content="Pay Conrad via PayPal" />
                        <meta name="og:title" content="pay.cnrad.dev" />
                        <meta name="og:image" content="/paypal.png" />
                </head>
        </html>
    `;

    async function handleRequest(request: any) {
        const userAgent = request.headers.get("User-Agent") ?? "";
        const isDiscord = userAgent.toLowerCase().includes("discord");
      
        if (isDiscord) {
            return new Response(document, {
                headers: {
                  "content-type": "text/html;charset=UTF-8",
                },
            });
        }
      
      
        const reqURL = new URL(request.url);
        return Response.redirect("https://paypal.me/cnradd/" + reqURL.pathname, 301);
    }
    //thanks alistair ^^^

    return(
        <>
            <Head>
		        <title>pay.cnrad.dev</title>
		        <meta name="theme-color" content="#4284f5" />
		        <meta name="og:description" content="Pay Conrad via PayPal" />
		        <meta name="og:title" content="pay.cnrad.dev" />
		        <meta name="og:image" content="/paypal.png" />
            </Head>
            <Page>
                <Text>Redirecting shortly...</Text>
            </Page>
        </>
    )
}

const Page = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h1`
    font-size: 20px;
    font-family: 'Inter';
`