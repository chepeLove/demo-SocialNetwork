import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

import React from "react";

let state = {
    posts: [
        {id: 1, textPost: 'Hi,how are you?', likesCount: 15},
        {id: 2, textPost: "It's my first post", likesCount: 30},
    ],
}

it('length of post should be incremented', ()=>{
    // 1. test data
    let action = addPostActionCreator('NEW POST TEST')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].textPost).toBe('NEW POST TEST')

})

it('message of new post should be NEW POST TEST', ()=>{
    // 1. test data
    let action = addPostActionCreator('NEW POST TEST')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts[2].textPost).toBe('NEW POST TEST')

})


it('after deleting length of messages should be decrement ', ()=>{
    // 1. test data
    let action = deletePost('1')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(1)

})


it('after deleting length should be decrement if id is incorrect  ', ()=>{
    // 1. test data
    let action = deletePost('1000')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(2)

})