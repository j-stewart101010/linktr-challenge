// @TODO: This would obviously be served from an API and would likely have a middleware layer inbetween.
export const api = [
  {
    "id": "link1",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "link": "https://www.lipsum.com/",
    "text": "48H",
  },{
    "id": "link2",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "text": "Shows",
    "list": [{
      "id": "sublink1",
      "title": "April 01 2019",
      "link": "https://forummelbourne.com.au/",
      "subtitle": "The Forum, Melbourne",
    },{
      "id": "sublink2",
      "title": "April 01 2019",
      "subtitle": "The Forum, Melbourne",
      "note": "Sold out",
    }]
  },{
    "id": "link3",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "text": "Music",
    "list": [{
      "id": "sublink3",
      "type": "audioPlayer",
      "link": "https://www.spotify.com/au/",
      "text": "48H",
    }]
  }
];

export default api;
