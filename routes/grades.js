import express from "express";
import Grade from "../models/grade-model.js"

import {
  model
} from "mongoose";

const router = express.Router();

// Create a single grade entry
router.post("/", async (req, res) => {
  // let collection = await model.collection("grades");
  let newDocument = req.body;

  // rename fields for backwards compatibility
  if (newDocument.student_id) {
    newDocument.learner_id = newDocument.student_id;
    delete newDocument.student_id;
  }


  // let result = await collection.insertOne(newDocument);
  const result = await Grade.create(newDocument)
  res.send(result).status(204);
});

// Get a single grade entry
router.get("/:id", async (req, res) => {
  // let collection = await model.collection("grades");
  // let query = { _id: (req.params.id) };
  // let result = await collection.findOne(query);
  const result = await Grade.findById(req.params.id)

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a score to a grade entry
router.patch("/:id/add", async (req, res) => {
  // let collection = await db.collection("grades");
  // let query = { _id: new ObjectId(req.params.id) };

  // let result = await collection.updateOne(query, {
  // $push: { scores: req.body }
  // });
  let updates = {
    $push: {
      scores: req.body
    }
  }

  const result = await Grade.findByIdAndUpdate(req.params.id, updates);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Remove a score from a grade entry
router.patch("/:id/remove", async (req, res) => {
  // let collection = await db.collection("grades");
  // let query = {
  // _id: new ObjectId(req.params.id)
  // };
  // const data = await Grade.findById(req.params.id)

  // id we are looking for, 
  // change we are making ( as Object)
  // Options (as an obj) {returnDocument}
  const data = await Grade.findByIdAndUpdate(req.params.id, {
    $pull: {
      scores: req.body
    }
  }, {
    returnDocument: "after"
  })
  // console.dir(data.scores)
  // data.scores.forEach(score) => {
  //   console.log(score)
  // })

  // res.send(data) 

  // let result = await collection.updateOne(query, {
  //   $pull: {
  //     scores: req.body
  //   }
// );

if (!data) res.send("Not found").status(404);
else res.send(data).status(200);
});

// Delete a single grade entry
router.delete("/:id", async (req, res) => {

  const result = await Grade.findByIdAndDelete(req.params.id)
  // let collection = await db.collection("grades");
  // let query = {
  //   _id: new ObjectId(req.params.id)
  // };
  // let result = await collection.deleteOne(query);

  if (!result) res.status(404).send("Not found");
  else 
    res.status(200).send(result);
});

// Get route for backwards compatibility
router.get("/student/:id", async (req, res) => {
  res.redirect(`grades/learner/${req.params.id}`);
});



// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {

const result = await Grade.find(query)


  // let collection = await db.collection("grades");
  let query = {
    student_id: req.params.id 
  };



  // Check for class_id parameter
  if (req.query.class) query.class_id = req.query.class;

//   let result = await collection.find(query).toArray();
console.dir(query)

if (!result) res.status(404).send("Not found");
  else 
    res.status(200).send(result);
});

// Delete a learner's grade data
router.delete("/learner/:id", async (req, res) => {
  // let collection = await db.collection("grades");
  let query = {
    student_id: Number(req.params.id)
  };
  if (req.body && req.body.class_id) {
    query.class_id = req.body.class_id
}
else {
  res.status(400).send("Incomplete Info")
  return;
}

  let result = await Grade.deleteOne(query);

  // if (result.deletedCount === 0) {
  //   res.status(404).send("Not found");
  // } else {
  //   res.status(200).send(result);
  // }
});

// Get a class's grade data
router.get("/class/:id", async (req, res) => {
  // let collection = await db.collection("grades");
  let query = {
    class_id: 
    Number(req.params.id)
  };

  // Check for learner_id parameter
  if (req.query.learner) query.learner_id = Number(req.query.learner);

  let result = await Grade.find(query)
  // .toArray();

  if (!result || result.length === 0) res.status(404).send("Not found");
  else res.status(200).send(result);
});

// Update a class id
router.patch("/class/:id", async (req, res) => {
  // let collection = await db.collection("grades");
  let query = {
    class_id: Number(req.params.id)
  };

  let result = await Grade.updateMany(query, {
    $set: {
      class_id: req.body.class_id
    }
  });

  if (result.matchedCount === 0) res.status(404).send("Not found");
  else res.status(200).send(result);
});

// Delete a class
router.delete("/class/:id", async (req, res) => {
  // let collection = await db.collection("grades");
  let query = {
    class_id: Number(req.params.id)
  };

  let result = await Grade.deleteMany(query);

  if (result.deletedCount === 0) res.status(404).send("Not found");
  else res.status(200).send(result);
});

export default router;