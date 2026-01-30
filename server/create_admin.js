import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();

const createAdmin = async () => {
    try {
        console.log("Connecting to DB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected.");

        const email = "admin@email.com";
        const password = "admin";

        const exist = await User.findOne({ email });
        if (exist) {
            console.log(`\nUser already exists.`);
            console.log(`Email: ${email}`);
            console.log(`Password: ${password} (or whatever you changed it to)`);
            process.exit();
        }

        console.log("Creating admin user...");
        const user = await User.create({
            name: "Admin User",
            email: email,
            password: password,
            isAdmin: true,
            role: "Admin",
            title: "Administrator",
            isActive: true
        });

        console.log("\nSUCCESS! Admin user created.");
        console.log("--------------------------------");
        console.log(`Email:    ${email}`);
        console.log(`Password: ${password}`);
        console.log("--------------------------------");

    } catch (err) {
        console.error("Error creating admin:", err);
    } finally {
        await mongoose.disconnect();
        process.exit();
    }
};

createAdmin();
