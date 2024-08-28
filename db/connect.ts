import * as SQLite from 'expo-sqlite';

export const getDB = async ()  =>{
    const db = await SQLite.openDatabaseAsync('aura_user');
    return db;
}