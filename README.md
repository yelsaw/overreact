

# Overreact

### What is Overreact?
This is an example app written with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) which uses [TailwindCSS](https://tailwindcss.com/) for styling and [Vite](https://vitejs.dev/) bundling.

Refer to [overreact](https://github.com/yelsaw/overreact) for more information.

### Run without Docker
To start without docker run the following commands

```
git clone https://github.com/yelsaw/overreact.git
cd overreact
npm install
npm run dev
```
Alternatively use [PNPM](https://pnpm.io/installation) (i.e., pnpm install, etc) for much faster builds.

### Run with Docker
To build the image and start a docker container run the following commands

```
git clone https://github.com/yelsaw/overreact.git
cd overreact
docker build . -t overreact
docker run --rm --name=overreact -p 5000:80 overreact
```
Proceed to http://localhost:5000/overreact, or whatever port was chosen when starting your container.

### Live Demo
https://yelsaw.github.io/overreact/

### Caveat Usor
This project is for experimental and educational purposes only!

### Future
Perhaps this app will become more useful over time, but for now it's only an `experimental` project.

### Screenshot
![image](https://github.com/yelsaw/overreact/blob/main/screenshot.png)

# AUTHOR
Yelsaw (overreact@yelsaw.com)

# LICENSE
[MIT] (https://github.com/yelsaw/overreact/blob/main/LICENSE)
