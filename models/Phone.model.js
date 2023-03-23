const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
        type: Number
      },
    color: {
        type: String
      },
    description: {
        type: String
      },    
    imageFileName: {
        type: String
      },    
    manufacturer: {
        type: String
      },    
      name: {
        type: String
      },   
      price: {
        type: Number
      },   
      processor: {
        type: String
      },   
      ram: {
        type: Number
      },    
      screen: {
        type: String
      }
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
