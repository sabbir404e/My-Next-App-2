import React, { Suspense } from 'react';
import ToDoPage from '../todos/page';

const PostsPage = () => {

    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<h2 className='text-3xl'>Loading posts...</h2>}>
                <ToDoPage postsPromise = {postsPromise}></ToDoPage>
            </Suspense>
        </div>
    );
};

export default PostsPage;