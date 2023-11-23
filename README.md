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

### `json-server --watch --port 4000 db.json`

Run the JSON file in the development code.

Open [http://localhost:4000/quotes](http://localhost:4000/quotes) to view it in your browser.

```db.json
{
    "quotes": [
        {
            "id": 1,
            "quote": "Life isn’t about getting and having, it’s about giving and being.",
            "author": "Kevin Kruse"
        },
        {
            "id": 2,
            "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
            "author": "Napoleon Hill"
        },
        {
            "id": 3,
            "quote": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein"
        },
        {
            "id": 4,
            "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            "author": "Robert Frost"
        },
        {
            "id": 5,
            "quote": "I attribute my success to this: I never gave or took any excuse.",
            "author": "Florence Nightingale"
        },
        {
            "id": 6,
            "quote": "You miss 100% of the shots you don’t take.",
            "author": "Wayne Gretzky"
        },
        {
            "id": 7,
            "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
            "author": "Michael Jordan"
        },
        {
            "id": 8,
            "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
            "author": "Amelia Earhart"
        },
        {
            "id": 9,
            "quote": "Every strike brings me closer to the next home run.",
            "author": "Babe Ruth"
        },
        {
            "id": 10,
            "quote": "Definiteness of purpose is the starting point of all achievement.",
            "author": "W. Clement Stone"
        },
        {
            "id": 11,
            "quote": "We must balance conspicuous consumption with conscious capitalism.",
            "author": "Kevin Kruse"
        },
        {
            "id": 12,
            "quote": "Life is what happens to you while you’re busy making other plans.",
            "author": "John Lennon"
        },
        {
            "id": 13,
            "quote": "We become what we think about.",
            "author": "Earl Nightingale"
        },
        {
            "id": 14,
            "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
            "author": "Mark Twain"
        },
        {
            "id": 15,
            "quote": "Life is 10% what happens to me and 90% of how I react to it.",
            "author": "Charles Swindoll"
        },
        {
            "id": 16,
            "quote": "The most common way people give up their power is by thinking they don’t have any.",
            "author": "Alice Walker"
        },
        {
            "id": 17,
            "quote": "The mind is everything. What you think you become.",
            "author": "Buddha"
        },
        {
            "id": 18,
            "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
            "author": "Chinese Proverb"
        },
        {
            "id": 19,
            "quote": "An unexamined life is not worth living.",
            "author": "Socrates"
        },
        {
            "id": 20,
            "quote": "Eighty percent of success is showing up.",
            "author": "Woody Allen"
        },
        {
            "id": 21,
            "quote": "Your time is limited, so don’t waste it living someone else’s life.",
            "author": "Steve Jobs"
        },
        {
            "id": 22,
            "quote": "Winning isn’t everything, but wanting to win is.",
            "author": "Vince Lombardi"
        },
        {
            "id": 23,
            "quote": "I am not a product of my circumstances. I am a product of my decisions.",
            "author": "Stephen Covey"
        },
        {
            "id": 24,
            "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
            "author": "Pablo Picasso"
        },
        {
            "id": 25,
            "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
            "author": "Christopher Columbus"
        },
        {
            "id": 26,
            "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            "author": "Maya Angelou"
        },
        {
            "id": 27,
            "quote": "Either you run the day, or the day runs you.",
            "author": "Jim Rohn"
        },
        {
            "id": 28,
            "quote": "Whether you think you can or you think you can’t, you’re right.",
            "author": "Henry Ford"
        },
        {
            "id": 29,
            "quote": "The two most important days in your life are the day you are born and the day you find out why.",
            "author": "Mark Twain"
        },
        {
            "id": 30,
            "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
            "author": "Johann Wolfgang von Goethe"
        }
    ]
}
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
