import Database from "better-sqlite3";

const sqliteDb = new Database("orders.sqlite");
export default sqliteDb;
