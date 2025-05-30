import pool from "../config/db";

// create user table if it doesn't exist
const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )`

    try {
        await pool.query(queryText); // send a query to the database with one of the open connection from the pool
        console.log("User table created successfully");
    } catch (error) {
        console.error("Error creating user table:", error);
    }
}

export default createUserTable