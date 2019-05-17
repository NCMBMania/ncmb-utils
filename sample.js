const NCMB = require('ncmb');
const config = require('./config');
const ncmb = new NCMB(config.applicationKey, config.clientKey);
const ManyData = ncmb.DataStore('ManyData');
const {fetchEvery} = require('./index');

ManyData.fetchEvery = fetchEvery;

(async () => {
  const res = await ManyData.fetchEvery();
  console.log(res.map(i => i.name));
})();
