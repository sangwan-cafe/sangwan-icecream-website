import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const seedAdmin = async () => {

  try {

    await connectDB();

    const exists = await Admin.findOne({
      username: "admin",
    });

    if (exists) {

      console.log("✅ Admin already exists");

      process.exit();

    }

    const hashedPassword = await bcrypt.hash(
      "123456",
      10
    );

    await Admin.create({

      username: "admin",

      password: hashedPassword,

      name: "Ishu Sangwan",

    });

    console.log("🎉 Admin Created Successfully");

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);

  }

};

seedAdmin();