module.exports = (models) => {
  return models.Tag.bulkCreate([{
    name: 'Summer'
  }, {
    name: 'Sweater'
    //   name: 'tops'
    // }, {
    //   name: 'bottoms'
    // }, {
    //   name: 'dresses',
    // }, {
    //   name: 'outerwear'
    // }, {
    //   name: 'accessories'
  }])
  .then(() => {
    return models.Image.bulkCreate([{
      url: 'https://www.jasonwustudio.com/media/catalog/product/cache/1/small_image/800x/040ec09b1e35df139433887a97daa66f/j/w/jwu_p1713019a_bone_1.jpg'
    }, {
      url: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/SMC_Web_MW_S17_777X660.jpg'
    }, {
      url: 'static/media/shop/belt.png'

      //   name: 'Flower Style',
      //   imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/forth.jpg'
      // }, {
      //   name: 'Men\'s Fashion',
      //   imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/SMC_Web_MW_S17_777X660.jpg'

      // name: 'Solid Black Top',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg'
      // }, {
      // name: 'Studded Leather Bikini',
      // imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg'
      // }, {
      // name: 'Nice Pearl Dress',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg'
      // }, {
      // name: 'Tribal Headwrap',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg'
    }])
  })
  .then(() => {
    return models.Product.bulkCreate([{
      name: 'Satin Dress'
    }, {
      name: 'Men\'s Fashion'
    //   name: 'Flower Style',
    //   imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/forth.jpg'
    // }, {
    //   name: 'Men\'s Fashion',
    //   imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/SMC_Web_MW_S17_777X660.jpg'

      // name: 'Solid Black Top',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg'
      // }, {
      // name: 'Studded Leather Bikini',
      // imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg'
      // }, {
      // name: 'Nice Pearl Dress',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg'
      // }, {
      // name: 'Tribal Headwrap',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg'
    }])
  })
  .then(() => {
    models.Product.findById(1).then(product => {
      models.Tag.findById(1).then(tag => product.addTag(tag))
      models.Image.findById(1).then(img => product.addImage(img))
    })
    models.Product.findById(2).then(product => {
      models.Tag.findById(2).then(tag => product.addTag(tag))
      models.Image.findById(3).then(img => product.addImage(img))
    })
    // models.Tag.findById(3).then(tag => {
    //   models.Product.findById(3).then(product => {
    //     product.addTag(tag)
    //   })
    // })
    // models.Tag.findById(4).then(tag => {
    //   models.Product.findById(4).then(product => {
    //     product.addTag(tag)
    //   })
    // })
    // models.Tag.findById(5).then(tag => {
    //   models.Product.findById(4).then(product => {
    //     product.addTag(tag)
    //   })
    // })
      // .then(() => models.Product.findOne({ where: { id: 1 }, include: models.Tag }))
      // .then(res => console.log(res.dataValues.tags))
  })
}
