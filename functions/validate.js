exports.handler = async function(event, context) {
  const license = event.queryStringParameters.license;
  if (!license) {
    return { statusCode: 400, body: JSON.stringify({ valid: false, error: 'License missing' }) };
  }

  const isValid = license.startsWith('LIC-');
  return {
    statusCode: 200,
    body: JSON.stringify({ valid: isValid }),
  };
};
