import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

console.log('Hi Redux!');

//tworzenie komentarza

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

const boundAddComment = text => dispatch(addComment(text));

//edycja komentarza

function editComment(text) {
    if (comment.id === action.id) {
        return {
            type: EDIT_COMMENT,
            text
        }
    }
};

const boundEditComment = text => dispatch(editComment(text));

//usuwanie komentarza

function removeComment(id) {
    comments.filter(comment => comment.id !== action.id);
    return {
        type: REMOVE_COMMENT
    }
};

const boundRemoveComment = id => dispatch(removeComment(id));

//ocenianie thumbs up/down komentarza

function thumbUpComment(id) {
    if (comment.id === action.id) {
        return {
            type: THUMB_UP_COMMENT,
            votes: comment.votes + 1
        }
    }
};

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

function thumbDownComment(id) {
    if (comment.id === action.id) {
        return {
            type: THUMB_DOWN_COMMENT,
            votes: comment.votes - 1
        }
    }
};

const boundThumbDownComment = id => dispatch(thumbDownComment(id));