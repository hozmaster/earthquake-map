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
    render() {
        return (
            <div>
                <Segment floated='left' style={segmentStyle} raised='true' >
                    <div>
                    <span>
                        <strong>  Quakes Monitor  </strong>
                    </span>
                        <Divider/>
                    </div>
                    <Item.Group divided={true}>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </div>
        )
    }
}

export default Control;