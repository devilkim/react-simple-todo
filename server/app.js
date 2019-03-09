const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const list = require('./list');

list.init();
app.use(cors());
app.use(bodyParser.json());

// GET http://localhost:9191/todos
app.get('/todos', (req, res) => {
  res.json({list: list.getList()});
});

// POST http://localhost:9191/todo
// Header Content-Type application/json
// Body {text: "Input text."}
app.post('/todo', (req, res) => {
  const text = req.body.text;
  if (text === undefined) {
    res.status(400).json({'message': 'Required body param \'text\'.'});
  } else {
    const no = list.addItem(text);
    res.json({no});
  }
});

// PUT http://localhost:9191/todo/[todo item no]/check
app.put('/todo/:no/checked', (req, res) => {
  const no = req.params.no;
  const checked = list.checkItem(parseInt(no, 10));
  res.json({isSuccess: checked !== null, checked});
});

// DELETE http://localhost:9191/todo/[todo item no]
app.delete('/todo/:no', (req, res) => {
  const no = req.params.no;
  res.json({isSuccess: list.removeItem(parseInt(no, 10))});
});

app.use((req, res, next) => {
  res.status(404).json({});
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(9191, function () {
  console.log('Example app listening on port 9191!');
});
