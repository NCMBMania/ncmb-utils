const NCMB = require('ncmb');
const config = require('./config');
const ncmb = new NCMB(config.applicationKey, config.clientKey);
const {fetchEvery} = require('./index');
const ManyData = ncmb.DataStore('ManyData');

//const Query = ManyData.equalTo('name', 'Name #26')
(async () => {
  const res = await fetchEvery(ManyData;
  console.log(res.map(i => i.name));
})();
