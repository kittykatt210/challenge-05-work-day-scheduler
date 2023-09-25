# challenge-05-work-day-scheduler

## Description

My motivation for this project was to incorporate new skills that I have learned in my full stack web development training. Specifically, I wanted to put into practice working with the jquery and day.js utilities.  

I created this page to keep track of my daily schedule/appointments.

This page allows me to keep track of my schedule using the above mentioned utilities as well as local storage. Because local storage is used in this project, the user is able to enter a task/appointment in the preferred time block, click the save button, close out the page and when they reopen it, their information is still there.

I learned several things while creating this project. First, I would say that I learned more about the day.js utility and how it can be used to pull day and time information for display purposes as well as using it in calculations. I also learned more about how to traverse the DOM using jquery. Although I must admit that I need to continue to brush up on how the .this command works.

## Installation

To view my project click the link below:

https://kittykatt210.github.io/challenge-05-work-day-scheduler/


## Usage

This project is intended to be used as a daily calendar scheduler/appointment keeper.

The following image shows the initial opening page:
![Initial Page](/assets/images/initial_page.png)
If the hour has passed, the time block will be gray. If it is the current hour the time block will be red and if it is a future hour the time block will be green. These time blocks update automatically using the day.js utility.

The following image shows that when you save something in the text box it is in fact saved to local storage:
![Local Storage](/assets/images/local_storage.png)

## Credits

I collaborated with Anthony Strickland for this project.

https://github.com/AnthonyStrickland?tab=repositories

The following site was used to gain information on using day.js:

https://day.js.org/docs/en/installation/installation

The following site was used to gain information on using jquery:

https://api.jquery.com

The following site was used to learn about the split() method:

https://www.w3schools.com/jsref/jsref_split.asp

The following site was used to learn about the parseInt() method:

https://www.w3schools.com/jsref/jsref_parseint.asp
