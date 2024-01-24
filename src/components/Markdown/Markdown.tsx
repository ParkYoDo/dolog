import useTheme from '@hooks/useTheme';
import { LayoutWrap } from '@styles/GlobalStyle';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const Markdown = ({ title, content }: { title: string; content: string }) => {
  const { theme } = useTheme();

  return (
    <MarkDownstyle>
      <TitleViewer>{title}</TitleViewer>
      <ContentViewer>
        <ReactMarkdown
          children={
            content.replace(/\n/gi, '\n\n') // 엔터 -> 엔터2번 : 줄 바꾸기
            // .replace(/\*\*/gi, '@$_%!^')
            // .replace(/@\$_%!\^/gi, '**')
            // .replace(/<\/?u>/gi, '*') // /u or u => *
          }
          remarkPlugins={[remarkGfm]}
          components={{
            // p: ({ children, ...props }) => {
            //   console.log(children.replace(/\n/, '\n\n'));
            //   return <p children={children} {...props} />;
            // },
            h1: props => {
              return (
                <h1
                  style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.5rem' }}
                  {...props}
                />
              );
            },
            h2: props => {
              return (
                <h2
                  style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.5rem' }}
                  {...props}
                />
              );
            },
            h3: props => {
              return (
                <h3
                  style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.5rem' }}
                  {...props}
                />
              );
            },
            h4: props => {
              return (
                <h4
                  style={{ fontSize: '1.125rem', marginBottom: '1rem', lineHeight: '1.5rem' }}
                  {...props}
                />
              );
            },
            strong: props => {
              return <strong {...props} />;
            },
            em: props => {
              return <em {...props} />;
            },
            del: props => {
              return <del {...props} />;
            },
            blockquote: props => {
              return (
                <blockquote
                  style={{
                    width: '100%',
                    padding: '16px 16px 16px 32px',
                    margin: '32px 0',
                    borderLeft: '8px solid #7afca1',
                    background: 'var(--navigation-color)',
                    borderRadius: '0 4px 4px 0',
                  }}
                  {...props}
                />
              );
            },
            a: props => {
              return <a style={{ color: '#7afca1' }} {...props} />;
            },
            img: props => {
              return (
                <img
                  style={{ maxWidth: '100%', margin: '48px 0' }}
                  src={props.alt ? '' : props.src?.replaceAll('%3A', ':')}
                  alt="Image"
                  width={props.alt && '100%'}
                />
              );
            },
            pre: props => <pre style={{ width: '100%', margin: '16px 0' }} {...props} />,
            code: props => {
              const newChildren = String(props?.children).slice(1)?.replace(/\n\n/gi, '\n');
              const match = /language-(\w+)/.exec(props.className || '');
              return match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  style={theme === 'dark' ? materialDark : materialLight}
                >
                  {newChildren}
                </SyntaxHighlighter>
              ) : (
                <code
                  style={{
                    width: '100%',
                  }}
                >
                  {newChildren}
                </code>
              );
            },
          }}
        />
      </ContentViewer>
    </MarkDownstyle>
  );
};

export default Markdown;

const MarkDownstyle = styled(LayoutWrap)`
  flex-direction: column;
  max-width: 50%;
`;

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
  font-size: 1.125rem;
  line-height: 2rem;
  word-break: break-word;
  overflow-y: auto;

  p {
    margin: 18px 0;

    &:has(img) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:has(code) {
      > code {
        padding: 2px 8px;
        border-radius: 4px;
        background-color: #555555;
        font-family: 'Poor Story';
      }
    }
  }

  pre {
    &:has(code) {
    }
  }

  //SyntaxHighlighter
  pre > div {
    border-radius: 12px;
  }
`;
