# The project is deployed on Gh-pages and Netlify
>`Gh-Pages` [link](https://nmili997.github.io/coolaim/) <br>
>`Netlify` [link](https://eloquent-shaw-838d68.netlify.com/)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
### Importing `react-router-dom` BrowserRouter & Route & Switch
```javascript
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
```
**Implementing Switch and Route `path`**
```javascript
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/posts" exact component={Post} />
  <Route path="/comment/:id" component={Comment} />
</Switch>
```
### `Fetching data from url and displaying it`
With function `fetch` we take all od fata from [url](https://bl0gpostapi.herokuapp.com/posts) and put in into `json` format.

```javascript
const data = await fetch("https://bl0gpostapi.herokuapp.com/posts");
const items = await data.json();
```
We can display information by clicking on the link `Click here fot the posts`. Buttons will be under in `<div>`.

Click on button will shows some data `fetched` from another [ulr](https://bl0gpostapi.herokuapp.com/comments).

Also we can go back when we hit `Welcome guide`.
