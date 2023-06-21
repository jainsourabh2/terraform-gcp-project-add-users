1. Ensure the user_mapping file is updated with the project and the user mapping. The user information should be provided as email id that are valid cloud identity.
2. Once done, copy all the scripts to a folder in an environment where nodejs is installed.
3. Run 'npm install'
4. Run 'node user_parse.js > input.csv'
5. Run 'chmod +x create.sh'
6. Run './create.sh'
7. This will generate 1 file per project which will have the user and the project mapping.
8. Run this with the terraform script.
