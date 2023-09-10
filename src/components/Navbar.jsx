import styled from "styled-components"
import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";

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

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchWrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchOutlined />
          </Search>
        </SearchWrapper>
        <Button>
            <AccountCircleOutlined /> Sign in
        </Button>
      </Wrapper>
    </Container>
  )
}
