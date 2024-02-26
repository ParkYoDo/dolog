import postApi from '@apis/reactQuery/postApi';
import { LayoutWrap } from '@styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const { getPost } = postApi();

  return (
    <LayoutWrap
      style={{
        overflowY: 'auto',
        flexWrap: 'wrap',
        gap: '24px',
      }}
    >
      {getPost.data?.map((el: any) => (
        <Post
          onClick={() => {
            navigate(`post/${el.url}`);
          }}
        >
          <div>{el.title}</div>
          {el.thumbnailImage ? (
            <img src={el.thumbnailImage} alt="image" width="360px" height="180px" />
          ) : (
            <div style={{ width: '360px', height: '180px' }} />
          )}
          {/* <div>{el.thumbnailText}</div> */}
          <div>{el.createdAt}</div>
        </Post>
      ))}
    </LayoutWrap>
  );
};

const Post = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export default Home;
