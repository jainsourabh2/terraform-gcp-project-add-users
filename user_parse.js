const fs = require("fs");
const { parse } = require("csv-parse");
var sleep = require('system-sleep');

let project = [];
let users = [];
var project_list = ['hack2023-team1','hack2023-team2']

fs.createReadStream("./user_mapping.csv")
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    project.push(row[0]);
    users.push(row[1]);
  })
  sleep(10*1000); // sleep for 10 seconds

  for(let j=0;j<project_list.length;j++){
    let user = ""
    for(let i=0;i<project.length;i++){
        if(project[i] == project_list[j])
            user =  user +'"user:'+ users[i] + '",'
      } 
      user = user.substring(0, user.length - 1);
      console.log(project_list[j] + "|" + user) 
 };
