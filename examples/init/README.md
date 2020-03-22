# Getting started your project

## npm

**npm** (originally short for **Node Package Manager**) is a package manager for the JavaScript programming language.   
It is the default package manager for the JavaScript runtime environment Node.js.   
It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. 

## before you start

Install Node.js to your desktop:  
https://nodejs.org/en/download/

## first steps

##### 1. init your project with npm
Open terminal window in your project and this command, answer the questions it will ask (or just press Enter):

`npm init`

In result it creates file **package.json** with settings for your project, that are needed for **nodejs (Node.js)**

##### 2. Add packages for development
In the terminal window run command below to add **live-server, typescript, npm-run-all** packages to your project development environment:

`npm install live-server typescript npm-run-all --save`

##### 3. Edit your package.json
Edit your **package.json** file, add three lines to "scripts" section:

```
...
"scripts": {
  "start": "run-p start-compile start-run",
  "start-compile": "tsc --watch",
  "start-run": "live-server"
}
...
```

##### 4. Create TypeScript config file
Create file **tsconfig.json**, copy these lines:
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "none",
    "sourceMap": true,
    "outFile": "./build/bundle.js",
    "rootDir": "./src",
    "removeComments": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
```

##### 5. Create index.ts file
Create index.ts file, it is your main file for javascript or typescript code. Copy/paste these lines:
```js
window.onload = function () {
  const hello = document.createElement('h1')
  hello.innerText = 'Hello!'
  document.body.append(hello)
}
```

##### 6. Create index.html file
Create index.html file like example below. It includes p5.js library link:

```html
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.js"></script>
  <script src="build/bundle.js"></script>
</head>
<body>
<!-- Code injected from JavaScript ^^ -->
</body>
</html>
```

##### 7. Create .gitignore file
You need to tell Git which files you don't need to be versioned and pushed to GitHub.com. Drop these lines into .gitignore file:
```
/node_modules
/build
```

##### 8. Create 'src' directory
Usually we place our code files into **src** directory.   
**index.ts** file is a main 'entry point' file and doesn't contain a lot of code.

##### 9. Run your project
Just open terminal window and write `npm run start` - npm will compile you project, start live server and open web-browser at http://localhost:8080  

*When you change your code files, live server will update web page automatically, you don't need to restart it every time you chage something.*

### What next?

Think about your project structure and put your javascript files into **src** directory.
You may code in javascript or typescript.  

Enjoy!
