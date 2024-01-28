import postApi from '@apis/reactQuery/postApi';
import Markdown from '@components/Markdown/Markdown';
import { LayoutWrap } from '@styles/GlobalStyle';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const { getOnePost: post }: any = postApi(id);

  return (
    <LayoutWrap
      style={{
        overflowY: 'auto',
      }}
      justifyContent="flex-start"
      flexDirection="column"
      padding={'0 120px'}
    >
      {!post.isLoading && <Markdown content={post.data?.content} />}
    </LayoutWrap>
  );
};

export default Post;
