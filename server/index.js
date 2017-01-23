'use strict';

const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server started at: http://localhost:${app.get('port')}/`);
})

// const PORT = process.env.PORT || 9000;
//
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
