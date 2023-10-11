import styled from "styled-components"
import { Card } from "../components/Card"
import { useEffect, useState } from "react"
 import axios from "axios"

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  gap: 10px;
`
export const Home = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${props.type}`);
        console.log(res);
        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideos();
  }, [props.type]);

  return (
    <Container>
      {
        videos.map((video) => (
          <Card key={video._id} video={video} />
        ))
      }
    </Container>
  )
}
