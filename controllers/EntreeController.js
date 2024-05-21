const entrees = [
    { name: "steak",
     price: "21", 
     vegan: false,
    image: "steak.jpeg"},
    { name: "chicken", 
    price: "18", 
    vegan: false,
    image: "chicken.jpeg" },
    { name: "mushroom", 
    price: "15", 
    vegan: true,
    image: "mushroom.jpeg" },
  ];
  
  
  
  const getEntrees = (req, res) => {
      res.send(entrees)
    }
    
    const getEntree = (req, res) => {
        res.send(entrees[req.params.id])
    }
    
    module.exports = {
        getEntrees,
        getEntree
    }