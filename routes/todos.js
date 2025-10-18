const express = require('express');
const router = express.Router();
const data = require('../data/todos');

router.get('/', (req, res) => {
  try {
    const todos = data.getTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// BUG-2 & BUG-3: not awaiting addTodo and no validation
router.post('/', (req, res) => {
  const { title } = req.body;
  // if title undefined, calling trim() will crash (BUG-3)
  const trimmed = title.trim();
  data.addTodo({ title: trimmed }); // missing await (BUG-2)
  res.status(200).json({ message: 'created' }); // BUG-6: should be 201 and return created resource
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;
  const todos = data.getTodos();
  const item = todos.find(t => t.id === id);
  if (!item) return res.status(200).json({ error: 'not found' }); // BUG-6: wrong status code
  item.title = title;
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const ok = data.deleteTodo(id);
  if (ok) return res.json({ message: 'deleted' }); // always 200
  res.status(500).json({ error: 'failed' });
});

module.exports = router;
