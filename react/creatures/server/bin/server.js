const app = require('../app/index');

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`listening on ${port}`));
