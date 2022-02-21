# Brandwatch Front-end Developer Challenge
### Author: Christina Kirk

This project represents the work done by Christina Kirk for the Brandwatch Front-end Developer Challenge. The high level goal of this challenge was to create a word cloud that displays the topics from a provided json object. 

## Table of Contents
- [Technologies Used](##Technologies-Used)
- [Requirements](##Requirements)
- [Running the Server](##Running-the-Server)
- [Testing](##Testing)
- [Getting Started](##Getting-Started)

## Technologies Used
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [react-d3-cloud](https://github.com/Yoctol/react-d3-cloud)
- [recharts](https://recharts.org/en-US)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Requirements
Ensure that the following modules are installed before running `npm install`

- Node v10.13.10 or higher

## Running the Server  
- navigate to ./wordcloud
- `npm install` - install dependencies
- `npm start` - start the server
- Wait for the local server to open automatically or navigate to http://localhost:3000/

## Testing
- `npm test` - to start the test suite


## Getting Started
Upon running the server a Word Cloud should populate with the list of topics data from the provided json object. 
### Word Cloud View
This view was created with the expectation that as a real-world project, this feature would fit into a a larger existing view, or be part of the construction of a new view with work detailed outside of the requirements. 

In accordance with the challenge instructions, the Word Cloud should adhere to the following behavior: 
- The label.property of each topic should be the 'word' in the word cloud
- Each topic should have one of 6 different text sizes, with the most popular topics largest, and least popular smallest
- A topic with a sentiment score > 60 should be displayed in green
- A topic with a sentiment score < 40 should be displayed in red
- Other topics should be displayed in grey 

### Word Details Panel
In accodance to the challenge instructions, the Word Details Panel should adhere to the following behavior: 

- When a topic is clicked, metadata about the topic should be displayed (total volume, and how that breaks down into positive, neutral and negative sentiment)

Topics that are clicked open a right hand panel that displays metadata about the topic including: 
- Volume by Sentiment
- Volume Over Time
- Volume By Page Type