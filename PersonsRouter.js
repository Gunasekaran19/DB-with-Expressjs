const express = require('express');
const router = express.Router();
const persons = require('./PersonSchema');

//post 
router.post('/', async(req, res) => {
    const postPerson = await new persons({
     Name : req.body.name,
     Age : req.body.age
    });
     const savePerson = await postPerson.save();
     res.status(200).send(savePerson);
});

// get 

router.get('/', async(req, res) => {
    const getAll = await persons.find()
     res.send(getAll);
});

//get by id 

router.get('/:id', async(req, res) => {
    const getById = await persons.findById(req.params.id);
     res.send(getById);
});

//Update 
router.put('/:id', async(req, res) => {
     const updatePerson = await persons.updateOne({_id:req.params.id},{$set:{Name:req.body.name,Age:req.body.age}});
     res.send(updatePerson);
});

router.delete('/:id', async(req, res) => {
    const deletePerson = await persons.remove({_id:req.params.id})
    res.send(deletePerson);
});

module.exports=router;

