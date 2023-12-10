import PropTypes from 'prop-types';

const defaultTitle = 'Pixel Point Next.js Tailwind Starter';
const defaultDescription = 'Pixel Point, test, develop, verumiam, danil, grigoruk';

const SEO = ({ title = defaultTitle, description = defaultDescription }) => (
  <>
    <title>{title}</title>
    <meta name="author" content="Grigoruk Danil | @verumiam" />
    <meta name="description" content={description} key="desc" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="48x48" href="/favicon/favicon-48x48.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/favicon-72x72.png" />
    <link rel="apple-touch-icon" sizes="96x96" href="/favicon/favicon-96x96.png" />
    <link rel="apple-touch-icon" sizes="256x256" href="/favicon/favicon-256x256.png" />
    <link rel="apple-touch-icon" sizes="384x384" href="/favicon/favicon-384x384.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/favicon/favicon-512x512.png" />
    <link rel="manifest" href="/favicon/manifest.webmanifest" crossOrigin="anonymous" />
  </>
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
};

export default SEO;
