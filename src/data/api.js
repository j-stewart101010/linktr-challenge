// @TODO: This would obviously be served from an API and would likely have a middleware layer inbetween.
export const api = [
  {
    "id": "link1",
    "link": "https://www.lipsum.com/",
    "text": "48H",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
  },{
    "id": "link2",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "text": "Shows",
    "track": "Song name",
    "artist": "Artist",
    "thumb": "https://via.placeholder.com/100x100",
  },{
    "id": "link3",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "text": "Music",
    "list": [{
      "type": "audioPlayer",
      "link": "https://www.spotify.com/au/",
      "text": "48H",
    }]
  }
];

export default api;
