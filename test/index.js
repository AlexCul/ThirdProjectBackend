import { createCluster } from 'redis';

const cluster = createCluster({
    rootNodes: [
        {
            url: 'redis://redis-cluster-0.redis:6379',
        },
        {
            url: 'redis://redis-cluster-1.redis:6379',
        },
        {
            url: 'redis://redis-cluster-2.redis:6379',
        },
    ]
});

cluster.on('error', (err) => console.log('Redis Cluster Error', err));

await cluster.connect();

await cluster.set('foo', 'bar');
const value = await cluster.get('foo');
console.log(value); // returns 'bar'

await cluster.quit();

while (true) {
    console.log("nothing")
}
