exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { user } = JSON.parse(event.body);
  if (!user) {
    return { statusCode: 400, body: JSON.stringify({ error: 'User is required' }) };
  }

  const license = generateLicense(user);
  return {
    statusCode: 200,
    body: JSON.stringify({ license }),
  };
};

function generateLicense(user) {
  const hash = Buffer.from(user + '-' + Date.now()).toString('base64');
  return `LIC-${hash.slice(0, 20)}`;
}
