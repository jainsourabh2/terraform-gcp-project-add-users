const fs = require("fs");
const { parse } = require("csv-parse");
var sleep = require('system-sleep');

let project = [];
let users = [];
var project_list = ['d11-hack2023-team1','d11-hack2023-team2','d11-hack2023-team3','d11-hack2023-team4','d11-hack2023-team5','d11-hack2023-team6','d11-hack2023-team7','d11-hack2023-team8','d11-hack2023-team9','d11-hack2023-team10',
'd11-hack2023-team11','d11-hack2023-team12','d11-hack2023-team13','d11-hack2023-team14','d11-hack2023-team15','d11-hack2023-team16','d11-hack2023-team17','d11-hack2023-team18','d11-hack2023-team19','d11-hack2023-team20',
'd11-hack2023-team21','d11-hack2023-team22','d11-hack2023-team23','d11-hack2023-team24','d11-hack2023-team25','d11-hack2023-team26','d11-hack2023-team27','d11-hack2023-team28','d11-hack2023-team29','d11-hack2023-team30',
'd11-hack2023-team31','d11-hack2023-team32','d11-hack2023-team33','d11-hack2023-team34','d11-hack2023-team35','d11-hack2023-team36','d11-hack2023-team37','d11-hack2023-team38','d11-hack2023-team39','d11-hack2023-team40',
'd11-hack2023-team41','d11-hack2023-team42','d11-hack2023-team43','d11-hack2023-team44','d11-hack2023-team45','d11-hack2023-team46','d11-hack2023-team47','d11-hack2023-team48','d11-hack2023-team49','d11-hack2023-team50'
]

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