# The project is deployed on Gh-pages and Netlify
>`Gh-Pages` [link](https://nmili997.github.io/coolaim/) <br>
>`Netlify` [link](https://eloquent-shaw-838d68.netlify.com/)
## How to install
### After cloning repository folow these steps:
1. Navigate to directory:
* `cd coolaim`
2. Install all dependencies
* `npm install`
3. U can start app:
* `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### U can test it or build it with:
* `npm test`
* `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

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
