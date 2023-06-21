#!/bin/bash
while read line
do
   rm -rf terraform.tfstate 
   rm -rf terraform.tfstate.backup
   echo "Record is : $line"
   IFS='|'
   read -ra arr <<< "$line"
   echo "Project is : ${arr[0]}"
   echo "User is : ${arr[1]}"
   cp main.tf.base ${arr[0]}.tf
   sed -i "s/project-id/${arr[0]}/g" "${arr[0]}.tf"
   sed -i "s/<<users>>/${arr[1]}/g" "${arr[0]}.tf"
   terraform apply -auto-approve -target=${arr[0]}.tf
   rm -rf terraform.tfstate
   rm -rf terraform.tfstate.backup
done < input.csv
