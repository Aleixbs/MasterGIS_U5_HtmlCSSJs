const topics = ['JavaScript','Variables','funciones','condicionales','bucles'];

const topicsMayus = topics.map(function(topic) {
    return topic.toUpperCase();
});

console.log(topicsMayus);

const topicsReverse = topicsMayus.reverse();

console.log(topicsReverse);

