const express = require('express');
const Project = require("../models/place");

const router = express.Router();

router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/project', (req, res) => {
  const name = req.body.name;
  const date = Date.parse(req.body.date);
  const service = req.body.service;
  const features = req.body.features;
  const complexity = req.body.complexity;
  const platforms = req.body.platforms;
  const users = req.body.users;
  const total = req.body.total;
  const search = req.body.search;

  const newProject = new Project({
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total,
    search
  })

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (res, req) => {
  Project.findById(req.params.id)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.delete('/:id', (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
