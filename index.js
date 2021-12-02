const express = require('express');
const upload = require('express-fileupload');

const app = express();
app.use(upload());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  if (req.files) {
    console.log(req.files);
    let file = req.files.file;
    const { name } = file;
    file.mv('./uploads/' + name, (err) => {
      if (err) throw err;
      res.send('File uploaded');
    });
    console.log(name);
  }
});

app.listen(5000, () => console.log('server started at port 5000'));
