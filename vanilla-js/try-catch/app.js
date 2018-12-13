const user = { name: 'Declan', email: 'declan@notahipster.com' };

try {
  // Produces ReferenceError
  // myFunc();

  // Produces TypeError
  // null.myFunc();

  // Produces SyntaxError
  // eval('ban ana');

  // Produces URIError
  // decodeURIComponent('%');

  if (!user.fax) {
    throw new SyntaxError(`${user.name} doesn't know what a fax is`);
  }
} catch (err) {
  console.log(err.message);
  console.log(`Type of error: ${err.name}`);
  // console.log(err instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('App still loads');
