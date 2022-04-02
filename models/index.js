// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// ***************Associations aka relationships***************
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {  //if hasMany phrase is next to it, it is the most important one than belong
  foreignKey: 'category_id'
}
  )
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag' //might need to change to foreignKey: 'tag_id'
});
//to  get 2 things to belong to each other, where neither one is primary you have to do through table.where products and tags meet

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag'
  // foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
