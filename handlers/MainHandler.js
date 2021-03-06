const ItemModel = require("../database/models/items");
const UserModel = require("../database/models/users")
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
  reply.send("Testing...");
  const itemData = request.body;
  const modelData = await new ItemModel(itemData);
  const saveData = await modelData.save()
  console.log(saveData);
}
exports.login = async (request, reply) => {
    reply.render("login.ejs", { title: "Login | AQ3D"})
}

exports.auth = async (request, reply) => {
    const uname = request.body.uname;
    const psw = request.body.psw;
    try {
      const user = await UserModel.findOne({ uname });
      if (user.psw === psw) {
         reply.render('userboard.ejs', { user: uname });
       } else {
           reply.render('error.ejs', { user: uname})
      }
     } catch (error) {
        reply.render('error.ejs', { user: uname })
         console.log(`This be error: ${error}`);
   }
}
exports.signup = async (request, reply) => {
    reply.render("signup.ejs");
}
exports.signupAuth = async (request, reply) => {
    const body = request.body;
    const data = await new UserModel(body);
    await data.save();
    reply.render("login.ejs", { title: "Signup | AQ3D" });
}
