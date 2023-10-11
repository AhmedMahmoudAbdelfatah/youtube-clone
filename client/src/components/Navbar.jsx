import styled from "styled-components"
import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { useState } from "react";
import { Upload } from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.backGroundLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Search = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: clamp(120px, 60%, 475px);
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 90%;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 102px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

export const Navbar = () => {
  const user = useSelector(state => state.user.data);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Wrapper>
          <SearchWrapper>
            <Search>
              <Input placeholder="Search" onChange={(e)=> setQuery(e.target.value)}/>
              <SearchOutlined onClick={()=> navigate(`/search?q=${query}`) } />
            </Search>
          </SearchWrapper>
          {user ?
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
                <Avatar src={user.img} />
                {user.name}
            </User>
            : 
            <Link to={`/signin`} style={{ textDecoration: "none", color: "inherit" }}>
              <Button>
                  <AccountCircleOutlined /> Sign in
              </Button>
            </Link>
          }
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  )
}
