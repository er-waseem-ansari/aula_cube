import React, { useEffect, useState } from 'react';
import { BigContainer, Posts, Comments, PostsList } from './HomeElements';
import DropDownFilter from './dropDownFilter';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null); // State to store selected postId
    const [comments, setComments] = useState([]); // State to store comments for the selected postId

    const handlePostSelection = (selectedOption) => {
        if (selectedOption) {
          // Update the selected post and comments
          setSelectedPostId(selectedOption.value);
          setComments(data[selectedOption.value - 1]);
        } else {
          // Handle case when the user clears the selection
          setSelectedPostId(null);
          setComments([]);
        }
      };
    
      const postOptions = data.map((_, postId) => ({
        value: postId + 1,
        label: `Post ${postId + 1}`,
      }));




    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            const fetchedData = response.data;
            const firstCommentsByPostId = {};

            fetchedData.forEach((item) => {
                const { postId, body } = item;

                if (!firstCommentsByPostId[postId]) {
                    firstCommentsByPostId[postId] = [body]; // Store comments as an array
                } else {
                    firstCommentsByPostId[postId].push(body); // Add comments to existing array
                }
            });

            setData(Object.values(firstCommentsByPostId));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to handle post click
    const handlePostClick = (postId) => {
        setSelectedPostId(postId); // Update selected postId
        setComments(data[postId - 1]); // Get comments for the selected postId
    };

    return (
        <>
            <BigContainer>
                <Posts>
                    <DropDownFilter options={postOptions} onChange={handlePostSelection}/>
                    <PostsList>
                        {data.map((comments, postId) => (
                            <span key={postId} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handlePostClick(postId + 1)}>
                                Post {postId + 1} : <br/><br/>
                                {comments[0]}
                                <hr />
                            </span>
                        ))}
                    </PostsList>
                </Posts>
                <Comments id='comments_list'>
                    {selectedPostId !== null && (
                        <>
                        <h6>Post {selectedPostId} Comments :</h6>
                        <ol>
                            {comments.map((comment, index) => (
                                <li key={index}>{comment}<hr/></li>
                            ))}
                        </ol>
                        </>
                    )}
                </Comments>
            </BigContainer>
        </>
    );
}

export default Home;