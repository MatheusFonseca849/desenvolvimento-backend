const { v4: uuid } = require('uuid')
const { Router } = require('express');
const router = Router();

let entries = []

router.get('/', (req, res) => {
    res.json(entries);
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const game = req.body.game;
    console.log(req.body)
    if (!name) {
        return res.status(403).json({ erro: "Nome é obrigatório" });
      }
      if (!game) {
        return res.status(403).json({ erro: "Jogo é obrigatório" });
      }

    const newEntry = { id: uuid(), name: name, game: game };
    entries.push(newEntry);
    res.status(201).json(newEntry);
    return
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const entry = entries.find(t => t.id === id);
    if (!entry) return res.status(404).json({ erro: "Não encontrada" });

    if (req.body.name) entry.name = req.body.name;
    if (req.body.game !== undefined) entry.game = req.body.game;
    res.json(entry);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = entries.findIndex(t => t.id === id);
  
    if (index === -1) return res.status(404).json({ erro: "Registro não encontrado" });
  
    entries.splice(index, 1);
    res.status(204).send();
  });

module.exports = router;