const express = require('express');

const router = express.Router();
const House = require('../models/House');

// get all houses
router.get('/', async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific house by id
router.get('/:houseId', async (req, res) => {
  try {
    const house = await House.findById(req.params.houseId);
    res.json(house);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific house by house/houseId
router.get('/house/:houseId', async (req,res) => {
	try{
		const house = await House.findById(req.params.houseId);
		res.json(house);
	} catch(err) {
		res.json({message: err});
	}
});

// get specific house by user/userId
router.get('/user/:userId', async (req,res) => {
	try{
		const house = await House.find({landlord_id: req.params.userId});
		res.json(house);
	} catch(err) {
		res.json({message: err});
	}
});

// post new house
router.post('/', async (req, res) => {
  const house = new House({
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    landlord_id: req.body.landlord_id,
    name: req.body.name,
    tenant_ids: req.body.tenant_ids
  });

  try {
    const savedHouse = await house.save();
    res.json(savedHouse);
  } catch (err) {
    res.json({ message: err });
  }
});

// update house by patch
router.patch('/:houseId', async (req, res) => {
  try {
    const updatedHouse = await House.updateOne(
      { _id: req.params.houseId },
      {
        $set: {
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          landlord_id: req.body.landlord_id,
          name: req.body.name,
          tenant_ids: req.body.tenant_ids
        }
      }
    );
    res.json(updatedHouse);
  } catch (err) {
    res.json({ message: err });
  }
});

// update house by put
router.put('/:houseId', async (req, res) => {
  try {
    const updatedHouse = await House.updateOne(
      { _id: req.params.houseId },
      {
        $set: {
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          landlord_id: req.body.landlord_id,
          name: req.body.name,
          tenant_ids: req.body.tenant_ids
        }
      }
    );
    res.json(updatedHouse);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete house by id
router.delete('/:houseId', async (req, res) => {
  try {
    const removedHouse = await House.remove({ _id: req.params.houseId });
    res.json(removedHouse);
  } catch (err) {
    res.json({ message: err });
  }
});

// get all houses by User Id
router.get('/:userId', async (req, res) => {
  try {
    const houses = await House.find({ landlord_id: req.params.userId });
    res.json(houses);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
