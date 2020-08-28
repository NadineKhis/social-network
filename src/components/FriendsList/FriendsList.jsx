import React from 'react';
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsList = (props) => {
    let friendsElements = props.state.friends.map(f => <FriendsItem name={f.name} id={f.id} isHere={f.isHere}/>)

    return (
        <div>
            List of friends
            1 {friendsElements}
            2
            3
        </div>

    )
};

export default FriendsList;