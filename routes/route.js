const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const cors = require('cors');


//Get Contacts
router.get('/contact', (req, res, next) => {
    console.log("get call")
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});


//Creating new Contact
router.post('/contact', (req, res, next) => {

    console.log("post call")
    let newContact = new Contact({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if (err) {
            return res.json({ message: 'Oops some error occurred , failed to create new contact.' })
        } else {
            res.json({ message: 'Contact created successfully ...' })
        }
    });
})

router.delete('/contact/:id', (req, res, next) => {
    var id=req.params.id;
    Contact.findByIdAndDelete( id , function(error, result) {
        if (error) {
            res.json(error)
        } else {
            res.json(result)
        }
    })
})

router.put('/contact/:id', (req, res, next) => {
    Contact.findByIdAndUpdate({ _id: req.body._id }, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    }, function(err,docs){
        if(err) res.json(err);
        else { console.log(docs);
            res.status(200).json("Contact Updated successfully..")
        }
    })
})




module.exports = router;