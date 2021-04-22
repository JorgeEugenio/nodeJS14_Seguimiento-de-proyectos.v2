const Product =require('../models/Product')

async function addProduct (req,res){
    try {
        const {
            name,
            size ,
            unitaryPrice ,
            description
        } = req.body

        const product = Product({
            name,
            size ,
            unitaryPrice ,
            description
        })

        if(req.file){
            const { filename} = req.file
            product.setImgUrl(filename)
        }
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}
async function getProducts(req, res){
    const products = await Product.find()
    //console.log(products);
    res.status(200).send(products)
    }
async function updateProduct(req,res){
    await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Product Updated'
  });
}

async function deleteProduct(req,res){
    await Product.findByIdAndRemove(req.params.id)    
res.json({
    status: 'cliente deleted!'
})
}

async function getProduct(req,res){
    const product = await Product.findOne({_id: req.params.id});
    //console.log(product);
    res.json(product);
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProduct
}