export function getStaticResourceUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4040/';
  } else {
    return ''; // TODO - production url
  }
}
