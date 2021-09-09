// follow github.com/alii, he pretty much gave me this

addEventListener('fetch', event => {
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

async function handleRequest(request) {
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