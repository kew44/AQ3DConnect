const ItemModel = require("../database/models/items");

exports.index = async (request, reply) => {
    const items = await ItemModel.find({});
    const itemCount = Object.keys(items).length;
    console.log(items);
    reply.status(200).send({
        name: "AdventureQuest 3D Item Database",
        developer: "Xenial",
        contributors: "None",
        itemCount: itemCount
  })
}

exports.addItem = async (request, reply) => {
    const itemName = request.params.itemName;
    const findItem = await ItemModel.findOne({ itemName });
    console.log(findItem);
}
exports.login = async (request, reply) => {
    reply.render("login.ejs", { title: "Login | AQ3D"})
}