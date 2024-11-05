const cassandra = require('cassandra-driver');

// Подключение к Service, замените 'scylla-service' на имя вашего Service, если изменили его
const client = new cassandra.Client({
  contactPoints: ['scylla-service'],  // Имя Service, создаёт DNS для Pod
  localDataCenter: 'datacenter1',     // Обязательно укажите data center
  keyspace: 'your_keyspace',          // Замените на нужный keyspace
});

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to ScyllaDB');
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();
