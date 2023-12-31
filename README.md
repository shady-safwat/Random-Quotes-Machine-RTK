# Build a Random Quote Machine RTK

![1700709713891](image/README/1700709713891.png)

## Description

Freecodecamp Front End Libraries Projects - Build a Random Quote Machine is capable of pulling quotes randomly from an API, a database, or simply from an array.

## Required

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## Technology Used

* HTML
* SASS
* Responsive Web
* Javascript
* Jquery
* React
* React-redux
* Redux-Toolkit
* React-bootstrap
* React-icons
* Fake API
* Axios

## Usage

### `https://type.fit/api/quotes`

Run the Fake API file in the development code.

Open [http://localhost:4000/quotes](http://localhost:4000/quotes) to view it in your browser.

```db.json
[
{
"text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
"author": "Thomas Edison, type.fit"
},
{
"text": "You can observe a lot just by watching.",
"author": "Yogi Berra, type.fit"
},
{
"text": "A house divided against itself cannot stand.",
"author": "Abraham Lincoln, type.fit"
},
{
"text": "Difficulties increase the nearer we get to the goal.",
"author": "Johann Wolfgang von Goethe, type.fit"
},
{
"text": "Fate is in your hands and no one elses",
"author": "Byron Pulsifer, type.fit"
},
{
"text": "Be the chief but never the lord.",
"author": "Lao Tzu, type.fit"
},
{
"text": "Nothing happens unless first we dream.",
"author": "Carl Sandburg, type.fit"
},
{
"text": "Well begun is half done.",
"author": "Aristotle, type.fit"
},
{
"text": "Life is a learning experience, only if you learn.",
"author": "Yogi Berra"
},
{
"text": "Self-complacency is fatal to progress.",
"author": "Margaret Sangster, type.fit"
},
{
"text": "Peace comes from within. Do not seek it without.",
"author": "Buddha, type.fit"
},
{
"text": "What you give is what you get.",
"author": "Byron Pulsifer, type.fit"
},
{
"text": "We can only learn to love by loving.",
"author": "Iris Murdoch, type.fit"
},
{
"text": "Life is change. Growth is optional. Choose wisely.",
"author": "Karen Clark, type.fit"
},
{
"text": "You'll see it when you believe it.",
"author": "Wayne Dyer, type.fit"
},
{
"text": "Today is the tomorrow we worried about yesterday.",
"author": "type.fit"
}
]
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
