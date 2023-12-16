import React, { useState } from 'react';
import {useMutation } from '@apollo/client';

// Component Import
import NavBar from '../../components/Navbar';

// Utils Import
import { MUTATION_COMMENT } from '../../utils/mutations';

const Comment = () => {
    const navbarChoices = [
        { text: "HOME", link: "/"},
    ];

    const [commentBy, setCommentBy] = useState('');
    const [commentType, setCommentType] = useState('');
    const [commentBody, setCommentBody] = useState('');

    const [addComment] = useMutation(MUTATION_COMMENT);

    const submitHandler = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: {
                    commentBy,
                    commentType,
                    commentBody,
                },
            });
            setCommentBy('');
            setCommentType('');
            setCommentBody('');
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <section class='page' id='comment'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <div>
                <h1>Leave a Comment</h1>
                <p>
                    In the section below, please leave your name, and click
                    what type of comment you want to leave. Brit will be able
                    to review and address any comment left.
                </p>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Comment By:</label>
                    <input
                        value={commentBy}
                        onChange={(e) => setCommentBy(e.target.value)}
                    />
                     <label>Comment Type:</label>
                    <input
                        value={commentType}
                        onChange={(e) => setCommentType(e.target.value)}
                    />
                     <label>Comment Body:</label>
                    <textarea
                        value={commentBody}
                        onChange={(e) => setCommentBody(e.target.value)}
                        style={{
                            width: '400px',
                            height: '200px',
                        }}
                    />
                    <div>
                        <input type="submit" value="SUBMIT COMMENT" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Comment;