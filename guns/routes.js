var express = require('express')
var router = express.Router()
const csv=require('csvtojson')
var path = require('path');

router.get('/deaths', async (req, res) => {
    const result=await csv().fromFile(path.join(__dirname, 'gun_death_total.csv'));
    res.send(result);
});

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
    let data24Length = data24.length;

    i=0;
    let data24DeathTotal = 0;
    let data24InjuryTotal = 0;
    while(i < data24.length) {
      data24DeathTotal += parseInt(data24[i]['# Killed']);
      data24InjuryTotal += parseInt(data24[i]['# Injured']);
      i++;
    }

    const result = { "date": date, "totalReports": data24Length, "totalKilled":data24DeathTotal, "totalInjured": data24InjuryTotal }

    res.send(JSON.stringify(result));
  } catch(e) {
    throw e;
  }
})
 

module.exports = router;
