const Category = require('../models/CategoryModel');

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: 'asc' }).orFail();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const newCategory = async (req, res, next) => {
  try {
    // res.json(!!req.body);
    const { category } = req.body;
    if (!category) {
      res.status(400).send('Category is required');
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      res.status(400).send('Category already exists');
    } else {
      const categoryCreated = await Category.create({ name: category });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    if (req.params.category !== 'Choose Category') {
      const categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.remove();
      res.json({ categoryDeleted: true });
    }
  } catch (err) {
    next(err);
  }
};

const saveAttr = async (req, res, next) => {
  const { key, val, categoryChosen } = req.body;
  if (!key || !val || !categoryChosen) {
    return res.status(400).send('All inputs required');
  }

  try {
    const category = categoryChosen.split('/')[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();

    if (categoryExists.attrs.length > 0) {
      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          const copyAttrValue = [...categoryExists.attrs[idx].value];
          copyAttrValue.push(val);
          const newAttrValue = [...new Set(copyAttrValue)];
          categoryExists.attrs[idx].value = newAttrValue;
        }
      });
    } else {
      categoryExists.attrs.push({ key: key, value: [val] });
    }
    await categoryExists.save();
    const cat = await Category.find({}).sort({ name: 'asc' });
    return res.status(201).send({ categoriesUpdated: cat });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
