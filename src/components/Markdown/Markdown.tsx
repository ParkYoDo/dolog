import { LayoutWrap } from '@styles/GlobalStyle';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const Markdown = ({ title, content }: { title: string; content: string }) => {
  return (
    <MarkDownstyle>
      <TitleViewer>{title}</TitleViewer>
      <ContentViewer>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // 코드
            code({ className, children }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div">
                  {String(children)}
                </SyntaxHighlighter>
              ) : (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  background="green"
                  language="textile"
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
            // 인용문 (>)
            blockquote({ children, ...props }) {
              return (
                <blockquote
                  style={{
                    background: '#7afca19b',
                    padding: '1px 15px',
                    borderRadius: '10px',
                  }}
                  {...props}
                >
                  {children}
                </blockquote>
              );
            },
            img({ ...props }) {
              return (
                <img
                  style={{ maxWidth: '40vw' }}
                  src={props.src?.replaceAll('%3A', ':')}
                  alt="MarkdownRenderer__Image"
                />
              );
            },
            em({ children, ...props }) {
              return (
                <span style={{ fontStyle: 'italic' }} {...props}>
                  {children}
                </span>
              );
            },
          }}
        >
          {content
            .replace(/\n/gi, '\n\n')
            .replace(/\*\*/gi, '@$_%!^')
            .replace(/@\$_%!\^/gi, '**')
            .replace(/<\/?u>/gi, '*')}
        </ReactMarkdown>
      </ContentViewer>
    </MarkDownstyle>
  );
};

export default Markdown;

const TitleViewer = styled(LayoutWrap)`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-bottom: 1px solid black;
  justify-content: flex-start;
  overflow-x: auto;
`;

const ContentViewer = styled(LayoutWrap)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  line-height: 1.7rem;
  overflow-y: auto;
`;

const MarkDownstyle = styled(LayoutWrap)`
  flex-direction: column;
  font-size: 1.4rem;
`;
