import styled from "styled-components"

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

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar />
        <Input placeholder="Add a comment..."/>
      </NewComment>
    </Container>
  )
}
