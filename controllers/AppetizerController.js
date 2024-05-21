const appetizers = [
    { name: "escargo",
     price: "12", 
     vegan: false,
     image: "escargo.jpeg" },
    { name: "shrimp-cocktail", 
    price: "10", 
    vegan: false,
    image: "shrimp.jpeg" },
    { name: "salad", 
    price: "8", 
    vegan: true,
    image: "salad.jpeg" },
  ];
  
  
  
  const getAppetizers = (req, res) => {
      res.send(appetizers)
    }
    
    const getAppetizer = (req, res) => {
        res.send(appetizers[req.params.id])
    }

    const getVeganApps = (req,res) => {
        // const isVegan = req.params.vegan
        const veganApps = appetizers.filter(appetizer => appetizer.vegan === true)
        res.send(veganApps)
    }
    
    module.exports = {
        getAppetizers,
        getAppetizer,
        getVeganApps
    }