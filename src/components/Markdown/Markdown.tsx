import { LayoutWrap } from '@styles/GlobalStyle';
import { useRef, useState } from 'react';
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
          children={
            content
              .replace(/\n/gi, '\n\n')
              .replace(/\*\*/gi, '@$_%!^')
              .replace(/@\$_%!\^/gi, '**')
              .replace(/<\/?u>/gi, '*') // /u or u => *
          }
          remarkPlugins={[remarkGfm]}
          components={{
            h1: props => {
              return <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem' }} {...props} />;
            },
            h2: props => {
              return <h2 style={{ fontWeight: 'bold', fontSize: '2.0rem' }} {...props} />;
            },
            h3: props => {
              return <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem' }} {...props} />;
            },
            h4: props => {
              return <h4 style={{ fontWeight: 'bold', fontSize: '1.125rem' }} {...props} />;
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
                    background: '#7afca19b',
                    padding: '1px 15px',
                    borderRadius: '10px',
                  }}
                  {...props}
                />
              );
            },
            a: props => {
              return <a style={{ color: 'blue' }} {...props} />;
            },
            img: props => {
              return (
                <img
                  style={{ maxWidth: '100%' }}
                  src={props.alt ? '' : props.src?.replaceAll('%3A', ':')}
                  alt="Image"
                />
              );
            },
            pre: props => <pre style={{ border: '3px solid red' }} {...props} />,
            code: props => {
              const match = /language-(\w+)/.exec(props.className || '');
              return match ? (
                <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div">
                  {String(props.children)}
                </SyntaxHighlighter>
              ) : (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  background="green"
                  language="textile"
                  PreTag="div"
                >
                  {String(props.children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
          }}
        />
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

  p:has(img) {
    width: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  pre {
    width: 100%;
  }

  pre > div {
    border-radius: 12px;
    width: 100%;
  }

  code {
    width: 100%;
  }
`;

const MarkDownstyle = styled(LayoutWrap)`
  flex-direction: column;
  font-size: 1.4rem;
`;
