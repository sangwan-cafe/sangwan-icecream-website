import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const USERNAME = "Ishu";          // <-- apna username
const PASSWORD = "09062003";         // <-- apna naya password

async function updateAdmin() {

  try {

    await connectDB();

    const admin = await Admin.findOne({ username: USERNAME });

    if (!admin) {

      console.log("❌ Admin not found");
      process.exit();

    }

    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    admin.password = hashedPassword;

    await admin.save();

    console.log("✅ Password Updated Successfully");

    console.log("Username:", USERNAME);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

}

updateAdmin();