const desserts = [
    { name: "cheesecake",
     price: "8", 
     vegan: false,
     image: "cheesecake.jpeg" },
    { name: "honeycomb", 
    price: "7", 
    vegan: false,
    image: "honeycomb.jpeg" },
    { name: "cherry-pie", 
    price: "6", 
    vegan: true,
    image: "pie.jpeg" },
  ];
  
  
  
  const getDesserts = (req, res) => {
      res.send(desserts)
    }
    
    const getDessert = (req, res) => {
        res.send(desserts[req.params.id])
    }
    
    module.exports = {
        getDesserts,
        getDessert
    }