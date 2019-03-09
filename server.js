const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const list = {
  init: () => {
    this.items = [];
  },
  getList: () => {
    return this.items;
  },
  addItem: (text) => {
    const no = this.items.length === 0 ? 1 : (this.items[this.items.length - 1].no + 1);
    const checked = false;
    this.items.push({no, checked, text});
    return true;
  },
  checkItem: (no) => {
    const item = this.items.filter(item => item.no === no);
    if (item.length === 0) {
      return false;
    } else {
      item[0].checked = !item[0].checked;
      return true;
    }
  },
  removeItem: (no) => {
    const items = this.items.filter(item => item.no !== no);
    if (items.length === this.items.length) {
      return false;
    } else {
      this.items = items;
      return true;
    }
  }
};

list.init();
app.use(cors());
app.use(bodyParser.json());

// GET http://localhost:9191/lists
app.get('/lists', (req, res) => {
  res.json({list: list.getList()});
});

// POST http://localhost:9191/list
/*
  header
    Content-Type application/json
  Body
    text
*/
app.post('/list', (req, res) => {
  const text = req.body.text;
  if (text === undefined) {
    res.status(400).json({'message': 'Required body param \'text\'.'});
  } else {
    list.addItem(text);
    res.json({});
  }
});
app.put('/list', (req, res) => {
  res.json({});
});
app.delete('/list', (req, res) => {
  res.json({});
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
