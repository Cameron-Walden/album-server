# spotify-server

***

## Registration

To use the Web API, start by creating a Spotify user account (Premium or Free). To do that, simply sign up at [spotify.com](https://www.spotify.com/us/)

***

Register your application [here](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/)

***

## Installation

Either clone down and do an `npm i` or copy the contents of the folders and files then:

- `npm i express`
- `npm i request`
- `npm i cors`
- `npm i dotenv`
- `npm i cookie-parser`

***

## Provide Application Credentials

inside of app.js

`const client_id = 'CLIENT_ID';`

`const client_secret = 'CLIENT_SECRET';`

`const redirect_uri = 'REDIRECT_URI'; `

Replace `CLIENT_ID` and `CLIENT_SECRET` with the id and secret from from your spotify dashboard.

Inside of edit settings, got to Redirect URIs and enter the redirect uri you are using inside of app.js. In mine, I am using http://localhost:888/callback. Make sure that both redirect uris match

***

## Running the application

start the server by running `node app.js`

open your browser and visit http://localhost:8888 (or whichever you are running on)

Click the `log in` link. Spotify accounts login should appear.

Log in with your spotify credentials. You'll now see the authroization screen where permission is requested to access account data

spotify used the `redirect_uri` to return to the application, passing back `authorization_code` which is subsequently exchanged in a second call for an `access_token`.

The homepage can call a web api endpoint at /me, retrieve data and render it

Click `Obtain new token using the refresh token` and a new token will be generated.

This is my template for how to retrieve data using an authorization flow from the spotify docs
