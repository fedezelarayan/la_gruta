const { Activity, ActivityType } = require("../db");
/* const ActivityType = require("../models/ActivityType"); */
const { testDataUploader, testDataCheck } = require('../utils/testDataUpload');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');


const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;
const ASSET_PATH = process.env.ASSET_PATH;



cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
})


//*-----------------GET All Activity---------------------
const getAllActivity = async (clic = 0) => {

    const check = await testDataCheck();
    console.log(check.length);
    
    if(check.length === 0){
      await testDataUploader()
    } else {
      console.log('Los datos ya estaban cargados');
    }

    const allActivity = await Activity.findAll({
      where:{
        status: true
      },
      include : {
        model: ActivityType,
        through: {
          attributes:[]
        }
      },limit: 4, offset: (clic *4) });
  
    if (!allActivity.length) {
      throw new Error("Actividades no encontrados");
    } else {
      return allActivity;
    }
  };


  //*---------------GET AtivityID--------------------

  const getActivityById = async (id) =>{
    const activityId = await Activity.findByPk(id, {
      include: {
        model: ActivityType,
        through: {
          attributes:[]
        }
      }
    })
    
    if(!activityId){
      throw new Error ("No se encontro la actividad");
    }else {
      return activityId;
    }
  };

//*-----------------POST Activity--------------------- 

const createActivity = async ({ name, description, type_activity, date, img }) => {
  const imagePath = ASSET_PATH;

  const files = await fs.promises.readdir(imagePath);
  for (const file of files) {
    const imgFullPath = imagePath + file;
    console.log(imgFullPath);
    const result = await cloudinary.uploader.upload(imgFullPath, { public_id: "image_activity" });
    const imgLink = result.secure_url;
    console.log(imgLink);
    await fs.promises.unlink(imgFullPath);
    img = imgLink;

    if (!name) throw new Error("No puedes enviar un nombre vacío");

    const existingActivity = await Activity.findAll({ where: { name } })

    if (existingActivity.length) {
      throw new Error("La Actividad existe");
    } else {

      const newActivity = await Activity.create({ name, description, date, img });

      console.log(img);
      newActivity.addActivityType(type_activity)
      return newActivity;
    }
  }
};

//*-----------------DELETE Activity---------------------
const deleteActivity = async (id) => {
  const activity = await Activity.findByPk(id);

  if (!activity) {
    throw new Error("La actividad no existe");
  } else {
    await Activity.update({ status: false }, { where: { id } });
    return;
  }

};

module.exports = { getAllActivity, createActivity, deleteActivity, getActivityById };

