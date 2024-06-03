
import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io'
export const PROJECT_ID = "66219f9e0ac*****cbeb"
export const DATABASE_ID = "production"
export const COLLECTION_ID_MESSAGES = "messages"
    
const client = new Client();

client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('66219f9e0*****cbeb');
   
export const account = new Account(client);
export const databases = new Databases(client)

export default client;


//import { Client, Databases } from 'appwrite';

//export const PROJECT_ID = '66219f9e0acc3' ;
//export const DATABASE_ID='viter_1';
//export const COLLECTION_ID_MESSAGES='messages_table1';

//const client = new Client();

//client
   // .setEndpoint('https://cloud.appwrite.io/v1')
   // .setProject('

//export const databases = new Databases(client);
//export default client;
