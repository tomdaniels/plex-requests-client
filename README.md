# plex-requests-client

![Plex Requests Site](/docs/screenshotGIF.gif "Plex Requests Site")

### [requests.tomd.io](http://requests.tomd.io)

This website is to help the users on my Plex server to request their own media.
It fetches the necessary ID's from themovieDB api and uses my homemade [API](https://github.com/tomdaniels/plex-requests-api) to store them into a firebase DB.

It searches movies and tv shows at the same time and sorts them by popularity.

The search results list will be triggered once 4 or more letters have been typed into the input element.
You can toggle the search results list by pressing enter, as that fires the `onSubmit` method as well and
there is also a **clear list** button incase anything buggy happens within the list, like a built in on/off button ;)

### Under the hood?

- Webpack & Babel (homemade [boilerplate](https://github.com/tomdaniels/react-boilerplate))
- Axios promise based http client
- Simple express server, client side requests to movieDB API
- Integrated homemade [API](https://github.com/tomdaniels/plex-requests-api)
- Hosted on AWS (Route 53/S3)
- Firebase DB
- Mocha, Chai & Enzyme test suite

#### TODO

- Create a local application which fetches requested media from the [API](https://github.com/tomdaniels/plex-requests-api) and pushes to localhost servers.
