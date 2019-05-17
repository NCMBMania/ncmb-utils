const fetchEvery = function() {
  return new Promise((res, rej) => {
    const count = this;
    const me = this;
    count
      .count()
      .fetchAll()
      .then(count => {
        const max = Math.ceil(count.count) / 1000;
        const promises = [];
        for (let i = 0; i < max; i += 1) {
          promises.push(me
            .limit(1000)
            .skip(i * 1000)
            .fetchAll());
        }
        return Promise.all(promises);
      })
      .then(ary => {
        let results = [];
        for (const items of ary) {
          results = results.concat(items);
        }
        res(results);
      })
  });
};

module.exports = fetchEvery