 import SpotifyWebApi from 'spotify-web-api-node'

 const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-private',
  'user-library-read',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
  'user-modify-playback-state'
 ]



const spotifyApi = new SpotifyWebApi({
  clientId: process.eventNames.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.eventNames.NEXT_PUBLIC_CLIENT_SECRET,
})
const LOGIN_URL =  spotifyApi.createAuthorizeURL(scopes);

export default spotifyApi

export { LOGIN_URL }

