import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  width: ${(props) => props.type === "sm" && "360px"};
  cursor: pointer;
  margin-bottom: ${(props) => props.type === "sm"? "10px" : "45px"};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "120px" : "202px"};
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export const Card = (props) => {
  return (
    <Link to={`/video/${props.id}`} style={{textDecoration: "none", color: "inherit"}}>
      <Container type={props.type}>
        <Img type={props.type}/>
        <Details type={props.type}>
          <ChannelImg type={props.type}/>
          <Texts>
            <Title>Title</Title>
            <ChannelName>Name</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container> 
    </Link>
  )
}
