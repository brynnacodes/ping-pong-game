# Ping-Pong Game

#### Simple JavaScript counting game

#### By Brynna Klamkin-McCarter

## Description

This simple Javascript game counts up from 1 to the number inputted by the user, replacing numbers divisible by 3 with "ping", by 5 with "pong", and by 15 with "ping-pong". The game demonstrates the use of JavaScript functions, methods, arrays, DOM manipulation, for and forEach loops, as well as branching with if/else if/else statements. To achieve functionality, I used the Behavior-driven-development (BDD) model to implement behaviors one step at a time (see specifications section below).

## Specifications

* It can count up to the provided number.
  * Example input: 5
  * Example output: [1, 2, 3, 4, 5]
* It can replace numbers divisible by 3 with "ping".
  * Example input: 5
  * Example output: [1, 2, "ping", 4, 5]
* It can replace numbers divisible by 5 with "pong".
  * Example input: 5
  * Example output: [1, 2, 3, 4, "pong"]
* It can replace numbers divisible by 15 with "ping-pong"
  * Example input: 15
  * Example output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "ping-pong"]
* It can replace numbers divisible by 3 with "ping", divisible by 5 with "pong", and divisible by 15 with "ping-pong" simultaneously.
  * Example input: 15
  * Example output: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"]


## Setup/Installation Requirements

* Clone this repository to your device
* Open index.html in your preferred browser
* Enter a number and click play
* The program will count from 1 up to your inputted number, replacing numbers with "ping", "pong", or "ping-pong" according to the stated game rules!
* Alternately, you may visit the live version of this game here:

## Known Bugs

There are no known bugs in this program.

## Support and contact details

Please contact Brynna for support, suggestions, and/or comments.

## Technologies Used

* HTML
* CSS/Bootstrap
* JavaScript/jQuery

### License

This program is licensed under the MIT license.

Copyright (c) 2017 Brynna Klamkin-McCarter
