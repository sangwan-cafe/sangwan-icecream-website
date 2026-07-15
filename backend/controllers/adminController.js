import bcrypt from "bcryptjs";

import Admin from "../models/Admin.js";

import generateToken from "../utils/generateToken.js";

// ADMIN LOGIN

export const loginAdmin = async (req, res) => {

  try {

    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {

      return res.status(401).json({
        success: false,
        message: "Invalid Username",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });

    }

    res.status(200).json({

      success: true,

      token: generateToken(admin._id),

      admin: {

        id: admin._id,

        username: admin.username,

        name: admin.name,

      },

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};