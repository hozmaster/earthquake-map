/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */
import React from "react"

import {
    Segment,
    Item,
    ItemImage,
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

    constructor(props) {
        super(props);

        this.state = {
            quakes: props.quakes,
        };

        console.log(this.state);

    }

    render() {
        return (
            <div>
                <Segment floated='left' style={segmentStyle}  >
                    <div>
                    <span>
                        <strong>  Quakes Monitor  </strong>
                    </span>
                        <Divider/>
                    </div>
                    <Item.Group divided={true}>

                        { this.state.quakes.map((quake,key) =>
                            <Item key={quake.id}>
                                <Item.Content>
                                    <Item.Header >{quake.properties.title}</Item.Header>
                                    <Item.Meta>Type : {quake.properties.type}</Item.Meta>
                                    <Item.Meta>Magnitude : {quake.properties.mag}</Item.Meta>
                                    <Item.Extra as='a' onClick={(quake.properties.details)}> Link</Item.Extra>
                                </Item.Content>
                            </Item>)
                        }

                    </Item.Group>
                </Segment>
            </div>
        )
    }
}

export default Control;