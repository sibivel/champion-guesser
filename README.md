# Champion Guesser

This is a personal project I made to learn Angular and NodeJS. It is a web application that shows the user data from a random challenger match from League Of Legends, and then the user tries to guess what champion was played in that match. 
<div align="center"><img src="screenshot.png"></div>
This project is not currently hosted anywhere.


## Getting Started

Currently you will need your own api key from Riot to run this project as it is not yet hosted publicly. You can get a development key for free [here](https://developer.riotgames.com/)

### Prerequisites

* Development Key: Currently you will need your own api key from Riot to run this project as it is not yet hosted publicly. You can get a development key for free [here](https://developer.riotgames.com/)
* Installation of NodeJS

### Installing

1. Clone the repository somewhere
2. Create a file called config.js in the root of the repository.
3. In config.js put

```
module.exports = {
    devKey: '[DEVKEY]'
}
```
where [DEVKEY] is you riot api development key.

4. Open a terminal/bash in the root of the repository.
5. Run npm install. This should install all of the node modules you will need.
### Starting the Server
#### Using nodemon
 If nodemon is installed, simply run the command 'nodemon' to build and start the webserver. 
 If nodemon is not installed, run the command 'npm install nodemon' to install it.
#### Without using nodemon
  Run 'ng build' to build the web app, and then npm start to start the webserver

Now the application should be running at localhost:8000
