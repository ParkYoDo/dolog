import postApi from '@apis/reactQuery/postApi';
import { LayoutWrap } from '@styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { getPost } = postApi();

  return (
    <LayoutWrap
      style={{
        overflowY: 'auto',
        flexWrap: 'wrap',
      }}
    >
      {getPost.data?.map((el: any) => (
        <div
          style={{
            width: 'fit-content',
            height: 'fit-content',
            cursor: 'pointer',
            border: '1px solid white',
            padding: '12px',
            borderRadius: '12px',
          }}
          onClick={() => {
            navigate(`post/${el.url}`);
          }}
        >
          <div>{el.title}</div>
          <img src={el.thumbnailImage} alt="image" width="360px" height="180px" />
          <div>{el.thumbnailText}</div>
          <div>{el.createdAt}</div>
        </div>
      ))}
    </LayoutWrap>
  );
};

export default Home;
