var express = require("express");
var router = express.Router();
var orm = require("../config/orm.js")

router.get("/", function(req, res){
  console.log("Someone is trying to connect!")
  var burgersTrue = []
  var burgersFalse = []

  orm.all("burgers", function(data){
    console.log(data)
    for(let i in data){
      if (data[i].devoured == true){
      burgersTrue.push(data[i])
      }

      else if (data[i].devoured == false){
        burgersFalse.push(data[i])
      }
    }
    console.log(burgersTrue[0].burger)
    res.render('burger', {burgersTrue:burgersTrue, burgersFalse:burgersFalse})
  })
})
router.post("/devour/:id", function(req,res){
  id = req.params.id
  orm.update("burgers", {devoured:1}, "id = "+id, function(){
    console.log(id)
    res.end()
  })

})
router.post("/new/:burger", function(req, res){
  burger = req.params.burger.toString()
  orm.create("burgers", burger, function(){
  res.end()
  })
})

module.exports = router;
