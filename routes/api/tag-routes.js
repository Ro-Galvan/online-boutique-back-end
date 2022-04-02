const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api/tags/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(404).json({
        message: 'No tag found with this id.'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/api/tags', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    if (!tagData) {
      res.status(404).json({
        message: 'tag was not created.'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/api/tags/:id', async (req, res) => {
  // update a tag's name by its `id` value
  tagData = await Tag.update(  //TOOK AWAY const
      {
        id: req.body.id,
      },
      {
      where: {
        id: req.params.id,
      },
    }
    )
    .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => res.json(err));
});

router.delete('/api/tags/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(404).json({
        message: 'No tag found with this id.'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
