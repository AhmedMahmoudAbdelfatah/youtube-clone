import styled from "styled-components"
import { useState, useEffect } from "react";
import { Comment } from "./Comment";
import axios from "axios";


const Container = styled.div``;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 80%;
`;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Comments = (props) => {
  const user = useSelector((state) => state.user.data);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${props.videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Avatar src={ user.img } />
        <Input placeholder="Add a comment..."/>
      </NewComment>
      {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}
