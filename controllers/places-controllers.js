// const fs = require("fs");

// const mongoose = require("mongoose");

// const HttpError = require("../models/http-error");
// const Projects = require("../models/place");

// const MongoClient = require('mongodb').MongoClient;

// const url =
//   'mongodb+srv://seher:seher123@cluster0-7co1t.mongodb.net/manager?retryWrites=true&w=majority';

// const createProduct = async (req, res, next) => {
//   const newProject = {
//     name: req.body.name,
//     date: req.body.date,
//     service: req.body.service,
//     features: req.body.features,
//     complexity: req.body.complexity,
//     platforms: req.body.platforms,
//     users: req.body.users,
//     total: req.body.total,
//     search: req.body.search
//   };
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     const projects = client.projects();
//     const newProject = projects.collection('project').insertOne(newProject);
//   } catch (error) {
//     return res.json({message: 'Could not store data.'});
//   };
//   client.close();

//   res.json(newProject);
// };

// const createProducts = async (req, res, next) => {
//   const createdProject = new Projects({
//     name: req.body.name,
//     date: req.body.date,
//     service: req.body.service,
//     features: req.body.features,
//     complexity: req.body.complexity,
//     platforms: req.body.platforms,
//     users: req.body.users,
//     total: req.body.total,
//     search: req.body.search
//   });
  
//   const result = await createdProject.save();
//   console.log(typeof createdProject._id);
//   res.json(result);
// };

// const getProducts = async (req, res, next) => {
//   const project = await Projects.find().exec();
//   res.json(project);
// }

// const deletePlace = async (req, res, next) => {
//   const projectId = req.params.pid;

//   let project;
//   try {
//     project = await Projects.findById(projectId);
//   } catch (err) {
//     const error = new HttpError(
//       "Something went wrong, could not delete place.",
//       500
//     );
//     return next(error);
//   }

//   if (!project) {
//     const error = new HttpError("Could not find place for this id.", 404);
//     return next(error);
//   }

//   const result = await project.deleteOne();
//   console.log(typeof project._id);
//   res.json("deleted place");

// };

// exports.deletePlace = deletePlace;
// exports.createProduct = createProduct;
// exports.createProduct = createProducts;
// exports.getProducts = getProducts;


