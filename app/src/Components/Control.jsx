/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */
import React from "react"

import {
    Segment,
    Divider,
} from "semantic-ui-react"

// some inline styles (we should move these to our index.css at one stage)
const segmentStyle = {
    zIndex: 999,
    position: "absolute",
    width: "400px",
    top: "10px",
    left: "10px",
    maxHeight: "calc(100vh - 5vw)",
    overflow: "auto",
    padding: "20px"
};

class Control extends React.Component {
    render() {
        return (
            <div>
                <Segment style={segmentStyle}>
                <div>
                    <span>
                      <strong>  Quakes monitor  </strong>
                    </span>
                </div>
                </Segment>
            </div>
        )
    }
}

export default Control;