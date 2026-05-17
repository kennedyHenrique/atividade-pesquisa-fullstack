import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
})

try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
} catch (error) {
    console.error("Error during Data Source initialization", error)
}