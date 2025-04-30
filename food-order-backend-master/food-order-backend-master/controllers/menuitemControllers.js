const { Menuitem } = require("../models/menuitemModel");

const getMenuItems = async (req, res) => {
    try {
      const menuItems = await Menuitem.find({});
      return res.status(200).json(menuItems);
    } catch (error) {
      res.status(404).json({ message: "server not responese" });
    }
  };
  
  const getMenuItemById = async (req, res) => {
    try {
      
      const { id } = req.params;
      
      const item = await Menuitem.findOne({ _id: id });
      
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message || 'internal server error' });
    }
  };
  
  const createMenuItem = async (req, res) => {
    try {
      const { name, description, place, restaurant } = req.body;
      if (!name || Object.keys(rest).length === 0) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const existItem = await Menuitem.findOne({ name });
      if (existItem) {
        return res.status(409).json({ message: "Item already exists" });
      }
      
      const newItem = new Menu({
        name,
        description,
        place,
        restaurant
      });
      const saveMenuItem = await newItem.save();
      res.status(201).json(saveMenuItem);
    } catch (error) {}
  };
  
  const updateMenu = async (req, res) => {
    try {
      
      const updatedMenuItem = await Menuitem.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      
      if (!updatedMenuItem) {
        return res.status(404).json({ message: "Items not found" });
      }
      
      res.status(200).json(updatedMenuItem);
    } catch (error) {
      res.status(500).json({ message: "Error updating restaurant", error });
    }
  };
  
  const deleteMenuItem = async (req, res) => {
      try {
          const deletedRestaurant = await Menuitem.findByIdAndDelete(req.params.id)
          if (!deletedRestaurant) {
              return res.status(404).json({ message: "Menu item not found" });
          }
          res.status(200).json({ message: "Item deleted successfully" });
      } catch (error) {
          res.status(500).json({ message: "Error deleting restaurant", error });
      }
  }
  
  module.exports = {
    getMenuItems,
    createMenuItem,
    getMenuItemById,
    updateMenu,
    deleteMenuItem
  };