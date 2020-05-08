var express = require('express')
var router = express.Router()
const csv=require('csvtojson')
var path = require('path');

router.get('/deaths', async (req, res) => {
    const result=await csv().fromFile(path.join(__dirname, 'gun_death_total.csv'));
    res.send(result);
});

router.get('/deaths/72/total', async(req,res) => {
  try {
    const data = await csv().fromFile(path.join(__dirname, 'gun_death_total.csv'));
    const result = totals(data);
    res.send(JSON.stringify(result));
  } catch(e) {
    throw e;
  }
})

router.get('/deaths/24/total', async(req, res) => {
  try {
    const data = await csv().fromFile(path.join(__dirname, 'gun_death_total.csv'));
    let todayDate = data[0]['Incident Date'];
    let date;
    let i = 0;
    while(!date) {
      let currentDate = data[i]['Incident Date'];
      if(todayDate != currentDate) {
        date = currentDate;
      }
      i++;
    }
    const data24 = data.filter(report => report['Incident Date'] == date);
    const result = totals(data24);

    res.send(JSON.stringify(result));
  } catch(e) {
    throw e;
  }
})

const totals = (gunArchiveData) => {
  let reportTotal = gunArchiveData.length;
  var i=0;
  let deathTotal = 0;
  let injuryTotal = 0;
  while(i < gunArchiveData.length) {
    deathTotal += parseInt(gunArchiveData[i]['# Killed']);
    injuryTotal += parseInt(gunArchiveData[i]['# Injured']);
    i++;
  }

  const result = { "totalReports": reportTotal, "totalKilled":deathTotal, "totalInjured": injuryTotal }
  return result;
}


 

module.exports = router;
