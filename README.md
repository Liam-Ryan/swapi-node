**KneatWars**

Enter the number of mega light-years to calculate the number of stops needed for each ship in the star wars universe.
****
**Requirements**

NodeJS version 6+ is required as this program utilizes ES6 features not added until Node version 6. 
****

**Getting started** 

_npm install_ will install production & development dependencies

_npm test_ - run tests, _npm run watch:test_ will set a test watcher running

_npm start_ - run application

_npm run coverage_ - Generate test coverage report, outputs summary to console and report to coverage folder

****
**Using the Application**

I really hope this section isn't needed or I've done something very wrong :) 

After running npm install and npm start you will be prompted for language. Arrows Navigate, Enter confirms

The main menu allows you to switch language, calculate stops for MGLT or exit

For MGLT you enter the number, then can choose whether to apply a search filter and to show or hide ships with an unknown number of stops ( due to consumables or MGLT being unknown)

In the results page you can select any ship to see full info ( it will be printed above where your next prompt is). When done select return to main menu. 

****
**Notes**

My main focus was making sure the application was easily extended. The code to retrieve and search for any swapi entity in english or wookiee is already present, the menu just needs to be added. The MGLT results screen can also be easily extended to re-order the results, link to related films, show the schema from swapi to give field details and so on.

Hard-coded strings are scattered throughout the files. If Wookiee were a real language or I had more time I would split them out into a separate file. I've created strings.js as a sample of this and applied it to starship-stops.js 

Unit testing coverage is not great on the terminal classes, I didn't have time to implement a proper E2E test suite for the interactive prompts. 

I chose to use promises instead of Node callbacks as the code is neater and the performance is not required for this applicatoin

Normally I would develop all of the modules separately and commit to NPM or a private repository which makes everything a lot neater but I wanted to keep all of my developed code together