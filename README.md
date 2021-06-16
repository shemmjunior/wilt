
# WILT
WILT stands for What I'v Learn't Today. The repo builds a platform where you can share anything learnt today such as how you accomplish a hard but yet a simple task, shortcuts you have discovered. This will help even lazy learners like us to get atleast something for the day or an idea which you may later on face in your tasks. 

## Structure
| Codebase  | Description |
| ------------- | ------------- |
| star  | Angular frontend  |
| wars  | Serverless backend built on nodejs, mongodb & Netlify Functions  |

## Installation 
### Frontend
1. Make sure you have nodejs installed in your system if not [Click here to head at nodejs official site](https://nodejs.org/en/download/) for installation
2. After installing node js install @angular/cli by running `npm i g @angular/cli@11.2.7`
3. Run `npm i` in the root directory
### Server
1. Open the 'wars' folder and run `npm install` to get all dependencies

Since our backend is Serverless no power is needed to spin it. Here we have two methods to run the server:

#### Method 1
1. Run `npm start` this method uses netlify-lambda as a project's dependency to run
2. Head to localhost:9000/.netlify/functions/server/{SERVER AVAILABLE ROUTES}

#### Method 2 (More Preferable)
1. Run `npm install netlify-cli -g` to get the netlify cli
2. Now just run `netlify dev` in the root wars folder directory
3. The API will be available at localhost:8888/.netlify/functions/server/${{SERVER AVAILABLE ROUTES}

This method is more preferable when it comes to deploying the functions to netlify it provides fast approach.

### Resources
* Netlify CLI - https://docs.netlify.com/cli/get-started/
* Netlify CLI Command Lists - https://cli.netlify.com/

    
## License

MIT

  
