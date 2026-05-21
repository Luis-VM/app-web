import sql from "mssql";

const config: sql.config = {
  user: "birladmin",
  password: "TU_PASSWORD_REAL",

  server: "DESKTOP-KCTEMPM\\SQLEXPRESS",

  database: "DBclientes",

  options: {
    trustServerCertificate: true,
  },
};

export async function connectDB() {
  try {
    const pool = await sql.connect(config);

    return pool;
  } catch (error) {
    console.error("Database connection error:", error);

    throw error;
  }
}