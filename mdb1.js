const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Adjust if using Atlas or another configuration
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Access the database
        const database = client.db('testdb'); // Replace 'testdb' with your database name
        const collection = database.collection('testcollection'); // Replace 'testcollection' with your collection name

        // Create a new document
        const doc = { name: 'Alice', age: 30 };
        const result = await collection.insertOne(doc);
        console.log(`New listing created with the following id: ${result.insertedId}`);

        // Query the collection
        const query = { name: 'Alice' };
        const user = await collection.findOne(query);
        console.log('Found user:', user);

    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);
