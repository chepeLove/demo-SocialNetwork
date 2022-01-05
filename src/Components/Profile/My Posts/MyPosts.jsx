import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {
    let postsElements = props.posts
        .map(p => <Post text={p.textPost} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field validate={[required,maxLength]}
                           component={Textarea} name={'newPostText'}
                           placeholder={'Enter you post'}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "profileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;