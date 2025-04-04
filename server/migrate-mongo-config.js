// migrate-mongo-config.js
const config = {
    mongodb: {
      url: process.env.MONGO_URI || "mongodb://localhost:27017",
      databaseName: "web_final",
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    },
    migrationsDir: "migrations",
    changelogCollectionName: "changelog",
    migrationFileExtension: ".js",
    useFileHash: false,
    moduleSystem: 'esm',
  };
  
  export default config;