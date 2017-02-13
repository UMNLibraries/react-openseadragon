import React from 'react'
import OpenSeadragon from 'openseadragon'
import OpenSeadragonControls from './react-openseadragon-controls'

export default class OpenSeadragonViewer extends React.Component {
    constructor(props) {
      super(props)
      this._config = this._config.bind(this)
    }

    componentDidMount() {
      let { page_handler } = this.props
      window.OPENSEADRAGONVIEWER = window.OpenSeadragon(this._config())
      this.setState({viewer: OPENSEADRAGONVIEWER})
      OPENSEADRAGONVIEWER.addHandler('page', function (viewer) {
          page_handler(viewer.page, OPENSEADRAGONVIEWER)
      })
      // This allows us to keep the transcript/image toggle pills in sync
      // with what was clicked on the viewer nav strip
      OPENSEADRAGONVIEWER.goToPage(this.props.params.id)
    }

    _config() {
      return Object.assign(this.props.default_config, this.props.config)
    }

    render() {
      let { text, include_controls } = this.props
      let controls  = (include_controls)  ? <OpenSeadragonControls /> : ''
      return (
                <div>
                  <div className="osd col-md-12">
                    <div className="openseadragon" id="osd-viewer">
                      {controls}
                    </div>
                  </div>
                </div>
              )
    }
}

OpenSeadragonViewer.defaultProps = {  include_navigator: true,
                                      include_controls: true,
                                      default_config: {
                                        showNavigator: true,
                                        id: 'osd-viewer',
                                        visibilityRatio: 1.0,
                                        constrainDuringPan: false,
                                        defaultZoomLevel: 1,
                                        minZoomLevel: 1,
                                        maxZoomLevel: 10,
                                        zoomInButton: 'zoom-in',
                                        zoomOutButton: 'zoom-out',
                                        homeButton: 'reset',
                                        fullPageButton: 'full-page',
                                        nextButton: 'next',
                                        previousButton: 'previous',
                                      }
                                    }

OpenSeadragonViewer.propTypes = {
  page_handler: React.PropTypes.func,
  config: React.PropTypes.object
}