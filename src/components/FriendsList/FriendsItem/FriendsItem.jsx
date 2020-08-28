import React from 'react';
import props from "../../../redux/state";

const FriendsItem = () => {
    let path = "friend" + props.id
    return (
        <div>
            {props.name}  {props.isHere}
        </div>
    )
}

export default FriendsItem;