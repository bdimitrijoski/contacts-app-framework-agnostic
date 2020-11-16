# Proof of Concept Framwork Agnostic Contacts App

This is a proof of concept app that shows an example how you can write framework agnostic apps and be able to reuse the same code regardless of the framework.
This sample app is written in React, but the core logic and UI components can be reused with any other framework as well.

# Goal

The goal is to create UI components that work across multiple platforms and apps with one code base. Write once, run anywhere.
On bigger project, ideally would be to create standalone npm packages for app logic and UI. All UI components that will be used in the system as web components that could be easily extended and maintained and fully decoupled from any framework.
This components can work with many popular frameworks right out of the box, and can be used without a framework because they are just web components.

# Project Structure

```
.
├── public                          - Public Files, Assets...etc.
├── src
|   ├── components                  - Custom components written in React
|   ├── core                        - App Core/Domain logic. All application code goes here
|   ├── pages                       - React container components
|   ├── UI                          - Core application UI components written as Web components
|
└── db.json                         - JSON file with mock data used by json-server
```

# Running the Project

First you need to start the mock server:
`npm run json-server`

Then, start the front-end app:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
