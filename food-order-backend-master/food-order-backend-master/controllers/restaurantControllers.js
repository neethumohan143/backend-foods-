const { Restaurant } = require("../models/restaurantModel");

const getAllRestaurants = async(req,res) => {
    try{
        const restaurants = await Restaurant.find({});
        return res.status(200).json(restaurants);
    }catch(error){
        res.status(404).json({ message: "restaurant not found" })
    }
};
const getRestaurantById = async(req,res) => {
    try {
        
        const { id } = req.params;
        const restaurant = await Restaurant.findOne({ _id: id });
        if (!restaurant) {
          return res.status(404).json({ message: "restaurant not found" });
        }
        res.status(200).json(restaurant);
      } catch (error) {
        res.status(500).json({ message: error.message || 'internal server error' });
      }
};

const createRestaurant = async(req,res) => {
    try {
        
        const admin = req.admin;
        console.log(admin);
        
        const { name, address, phone, cuisine, menu } = req.body;
        
        if (!name || Object.keys(rest).length === 0) {
          return res.status(400).json({ message: "All fields are required" });
        }
        
        const existRestaurant = await Restaurant.findOne({ name });
        if (existRestaurant) {
          return res.status(400).json({ message: "Restaurant already exists" });
        }
    
        if (req.file) {
          console.log("Uploading file to Cloudinary...");
          uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
          console.log("Upload result:", uploadResult);
        } else {
          console.log("No file to upload.");
        }
    
        // Save restaurant data to database
        const restaurant = new Restaurant({
          name,
          address,
          phone,
          cuisine,
          menu
        });
    
        const savedRestaurant = await restaurant.save();
    
        res.status(201).json(savedRestaurant);
      } catch (error) {}
    };
const updateRestaurant = async(req,res) => {
    try {
        
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        
        if (!updatedRestaurant) {
          return res.status(404).json({ message: "Restaurant not found" });
        }
    
        res.status(200).json(updatedRestaurant);
      } catch (error) {
        res.status(500).json({ message: error.message || 'updating server error' });
      }
};
const deleteRestaurant = async(req,res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!deletedRestaurant) {
          return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json({ message: "Restaurant deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message || 'deleting server error' });
      }  
}

module.exports = { 
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};