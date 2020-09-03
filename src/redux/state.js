import female1 from "../images/dialogs/avatars/female1.jpg";
import female2 from "../images/dialogs/avatars/female2.jpg";
import female3 from "../images/dialogs/avatars/female3.jpg";
import female4 from "../images/dialogs/avatars/female4.jpg";
import male1 from "../images/dialogs/avatars/male1.jpg";
import male2 from "../images/dialogs/avatars/male2.jpg";
import male3 from "../images/dialogs/avatars/male3.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, it\'s my blog', likesCount: 3},
                {id: 2, message: 'Ta-daa', likesCount: 5},
                {id: 3, message: ':-)', likesCount: 2},
                {id: 3, message: 'c\'mon baby light my fire', likesCount: 2},
            ],
            newPostText: 'Enter a text',
        },

        messagesPage: {
            messages: [
                {id: 1, yourMessages: 'hello, my friend', otherMessages: 'hi'},
                {id: 2, yourMessages: 'how r u doing?', otherMessages: "I'm doing well, n u?"},
                {id: 3, yourMessages: 'me 2, how about cinema tomorrow?:-)', otherMessages: "I'm definitely in!"},
            ],
            dialogs: [
                {id: 1, name: 'Liam Montgomery', img: male1},
                {id: 2, name: 'Thyra Davis', img: female1},
                {id: 3, name: 'Elfreda Mancini', img: female2},
                {id: 4, name: 'Jerica Martinez', img: female3},
                {id: 5, name: 'Bobby Pinch', img: male2},
                {id: 6, name: 'Charlene Worcester', img: female4},
                {id: 7, name: 'Martin Buxton', img: male3},
            ],
            newMessageBody: " ",
        },

        sidebar: {
            friends: [
                {id: 1, name: "Liam Montgomery", isHere: "online"},
                {id: 2, name: "Thyra Davis", isHere: "offline"},
                {id: 3, name: "Elfreda Mancini", isHere: "online"},
                {id: 4, name: "Jerica Martinez", isHere: "offline"},
            ],
        },
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    },

    dispatch(action) { /*type: ADD-POST*/
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._state._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._state._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let newMessage = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 4, yourMessages: newMessage, otherMessages: ''});
            this._state._callSubscriber(this._state);
        }
    },

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.store = store;
