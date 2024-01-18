import { LayoutWrap } from '@styles/GlobalStyle';
import Markdown from '@components/Markdown/Markdown';

const Write = () => {
  return (
    <LayoutWrap style={{ border: '2px solid red' }}>
      <LayoutWrap width="50%">
        <textarea />
      </LayoutWrap>
      <Markdown />
    </LayoutWrap>
  );
};

export default Write;
