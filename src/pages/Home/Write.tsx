import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Write = () => {
  const markdown = `
  # 헤딩

  **굵게**

  일반 텍스트

  \`\`\`js
  console.log(123)
  for(var i=0;i <length;)
  \`\`\`

  *기울이기*

  글자 \`배경색\`
    
  > 인용문
  
`;

  return (
    <MarkDownstyle>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, ...props }) {
            // markdown에 사용된 언어
            const match = /language-(\w+)/.exec(className || '');
            // 사용된 언어가 표시되어있는 경우
            return match ? (
              <SyntaxHighlighter
                // {...props}
                children={String(children).replace(/\n$/, '')}
                // style={dark}
                language={match[1]}
                style={vscDarkPlus}
                PreTag="div"
              />
            ) : (
              // 사용된 언어를 따로 적지 않거나 적합하지 않을 경우
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </MarkDownstyle>
  );
};

export default Write;

const MarkDownstyle = styled.div`
  width: 50%;
  flex-direction: column;
  font-size: 1rem;
  line-height: 2.5rem;
  border: 1px solid red;
`;
