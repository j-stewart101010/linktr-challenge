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
    "list": {
      "items": [{
        "id": "sublink1",
        "title": "April 01 2019",
        "link": "https://forummelbourne.com.au/",
        "subtitle": "The Forum, Melbourne",
      },{
        "id": "sublink2",
        "title": "April 01 2019",
        "subtitle": "The Forum, Melbourne",
        "note": "Sold out",
      }],
    },
  },{
    "id": "link3",
    "theme": {
      "backgroundColor": "#39e09b",
      "textColor": "#282828",
    },
    "text": "Music",
    "type": "audioPlayer",
    "list": {
      "type": "audioPlayer",
      "items": [{
        "id": "sublink3",
        "title": "April 01 2019",
        "iconLink": "https://open.spotify.com/artist/4nDoRrQiYLoBzwC5BhVJzF",
        "player": {
          "thumb": "https://via.placeholder.com/75",
          "title": "Song 1 name - Artist 2 name",
          "theme": {
            "backgroundColor": "#39e09b",
            "textColor": "#282828",
          },
        },
      },{
        "id": "sublink4",
        "title": "May 08 2019",
        "link": "https://open.spotify.com/artist/4nDoRrQiYLoBzwC5BhVJzF",
        "player": {
          "thumb": "https://via.placeholder.com/75",
          "title": "Song 2 name - Artist 2 name",
          "theme": {
            "backgroundColor": "#39e09b",
            "textColor": "#282828",
          },
        },
      }],
    },
  },
];

export default api;
