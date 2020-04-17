const express = require('express');
const router = express.Router();

const todos = [
  {
    id: 1,
    value: "Выгулять собаку",
    compleated: false,
    checked: false,
    edited: true,
    deleted: false,
  },
  {
    id: 2,
    value: "Купить молока",
    compleated: true,
    checked: false,
    edited: false,
    deleted: false,
  },
  {
    id: 3,
    value: "Отправить начальнику отчет",
    compleated: false,
    checked: false,
    edited: false,
    deleted: false,
  },
  {
    id: 4,
    value: "Убраться во дворе",
    compleated: false,
    checked: true,
    edited: false,
    deleted: false,
  }
];

/* GET profile. */
router.get('/todos/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(todos));
});


router.post('/todos/todo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const newItem = {
    ...req.body,
    id: todos[todos.length - 1].id + 1
  }

  todos.push(newItem);
  res.status(200).send(JSON.stringify(newItem))
})

router.put('/todos/todo/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    ...req.body,
  }))
});

router.delete('/todos/todo/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    ...req.body,
  }))
});

module.exports = router;
