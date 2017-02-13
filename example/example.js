import React from 'react'
import ReactDOM from 'react-dom'
import ReactOpenSeadragon from '../src/react-openseadragon'


var config =
  {
    "type": "image",
    "label": "Image",
    "focus": true,
    "include_controls": true,
    "sequenceMode":  true,
    "showReferenceStrip": true,
    "defaultZoomLevel": 0,
    "tileSources":   [
      "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
      "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
    ],
    tocs: [
      "MLK",
      "A Statue"
    ]
  }

var App = React.createClass({
  render () {
    return (<ReactOpenSeadragon config={config} base_path="/image" />)
  }
});

ReactDOM.render(<App />, document.getElementById('app'));