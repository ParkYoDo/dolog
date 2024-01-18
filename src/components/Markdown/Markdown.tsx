import { LayoutWrap } from '@styles/GlobalStyle';
import { IChildren } from '@type/interface';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const InlineCode = styled.span`
  background-color: yellow;
`;

const InlineCodeBlock = ({ children }: IChildren) => {
  return <InlineCode>{children}</InlineCode>;
};

const Markdown = () => {
  const markdown = `
  # 헤딩

  **굵게**

  일반 텍스트

  \`\`\`
    코드블럭
  \`\`\`

  *기울이기*

  글자 \`배경색\`
    
  > 인용문
  
`;

  return (
    <MarkDownstyle>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </MarkDownstyle>
  );
};

export default Markdown;

const MarkDownstyle = styled(LayoutWrap)`
  width: 50%;
  flex-direction: column;
  font-size: 1rem;
  line-height: 2.5rem;
  border: 1px solid red;
`;
