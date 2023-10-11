import { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Comments } from "../components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchFailure, fetchStart, fetchSuccess } from "../redux/videoSlice";
import { format } from "timeago.js";
import { Recommendation } from "../components/Recommendation";


const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

export const Video = () => {
  const user = useSelector(state => state.user.data);
  const video = useSelector(state => state.video.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoRes = await axios.get(`/videos/find/${id}`);
        const channelRes = await axios.get(`/users/find/${videoRes?.data?.userId}`);
        dispatch(fetchSuccess(videoRes.data));
        setChannel(channelRes.data);
      } catch (error) {
        console.log(error);
        dispatch(fetchFailure());
      }
    }
    fetchData();
  }, [id, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${video?._id}`);
    dispatch(like(user._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${video?._id}`);
    dispatch(dislike(user._id));
  };
  const handleSub = async () => {
    user.subscribedUsers.includes(channel?._id)
      ? await axios.put(`/users/unsub/${channel?._id}`)
      : await axios.put(`/users/sub/${channel?._id}`);
    dispatch(subscription(channel?._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={video.videoUrl} controls />
        </VideoWrapper>
        <Title>{video?.title}</Title>
        <Details>
          <Info>{video?.views} views • {format(video?.createdAt)}</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {video?.likes?.includes(user?._id) ?
                <ThumbUpIcon />
                :
                <ThumbUpOutlinedIcon /> 
              }
              {video?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {video?.dislikes?.includes(user?._id) ?
                <ThumbDownIcon />
                :
                <ThumbDownOffAltOutlinedIcon />
              }
              {video?.dislikes?.length}
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={ channel?.img } />
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
              <Description>
                {video?.desc}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {user.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={ video._id } />
      </Content>
      <Recommendation tags={ video?.tags } />
    </Container>
  );
};
