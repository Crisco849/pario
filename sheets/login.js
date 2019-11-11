var name = "";
var pass = "";
 function inputChange(){
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
 }

const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1jsIdflZXjlZ_p3NieVAgtN9zL36x2y2lspL7GqZ0IxY');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  function printUsername(user) {
    console.log('Name: ', user.username, 'Password: ', user.passwords);
    console.log('-----------------------');
  }
  /* change field
  const rows = await promisify(sheet.getRows)({
    query: 'country = CA'

  });

  rows.forEach(row => {
    row.country = 'USA';
    row.save();
  }) */

  /* print info
  const rows = await promisify(sheet.getRows)({
    offset: 2,
    limit: 3,
    orderby: 'time'
  });
  rows.forEach(row => {
    printUsername(row);
  })
  */

  /* add rows
  const row = {
    username: 'Crisco',
    passwords: 'pass',
    country: 'USA'
  }
  await promisify(sheet.addRow)(row);

  rows.forEach(row => {
    row.country = 'USA';
    row.save();
  })
  */


  const rows = await promisify(sheet.getRows)({
    offset: 2,
    limit: 3,
    orderby: 'time'
  });
  var found = false;
  rows.forEach(row => {
    if(row.username == name && row.passwords == pass){
      found = true;
      alert("Confirmed");
    }
  })
  if(found == false){
    alert("Username or Password is Incorrect.");
  }

}






accessSpreadsheet();
