import { Link } from "react-router-dom";
import styled from "styled-components"
import { format } from "timeago.js"
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`/users/find/${props?.video?.userId}`);
        console.log(res);
        setChannel(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchChannel();
  }, [props?.video?.userId]);

  return (
    <Link to={`/video/${props?.video?._id}`} style={{textDecoration: "none", color: "inherit"}}>
      <Container type={props.type}>
        <Img type={props.type} src={props?.video?.imgUrl} />
        <Details type={props.type}>
          <ChannelImg type={props.type} src={ channel.img } />
          <Texts>
            <Title>{props?.video?.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{props?.video?.views} views • {format(props?.video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container> 
    </Link>
  )
}
