import { IconButton, LayoutWrap } from '@styles/GlobalStyle';
import Markdown from '@components/Markdown/Markdown';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ImageIcon from '@components/Svg/ImageIcon';
import { useRef } from 'react';
import postApi from '@apis/reactQuery/postApi';
import { api, apis } from '@apis/apis';
import axios from 'axios';

const Write = () => {
  const { getPresignedUrl } = postApi();

  const {
    watch,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<{ title: string; content: string }>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <LayoutWrap
      style={{
        overflowY: 'auto',
      }}
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="row"
    >
      <LayoutWrap flexDirection="column" style={{ borderRight: '1px solid black' }}>
        <Input
          type="file"
          ref={fileInputRef}
          accept={'image/*'}
          hidden
          onChange={async e => {
            let file = e.target.files![0];
            let fileName = encodeURIComponent(file.name.replaceAll(' ', ''));

            getPresignedUrl.mutate(fileName, {
              onSuccess: async data => {
                console.log(data);

                await fetch(data, {
                  method: 'PUT',
                  body: file,
                  headers: {
                    'Content-type': file.type,
                  },
                });

                console.log(`https://pyd-blog.s3.ap-northeast-2.amazonaws.com/${fileName}`);
              },
            });
          }}
        />

        <IconButton onClick={() => fileInputRef.current?.click()}>
          <ImageIcon />
        </IconButton>

        <Input
          type="text"
          placeholder="title"
          {...register('title', {
            required: 'title를 입력하세요',
          })}
        />
        <Textarea
          placeholder="내용을 입력해주세요!&#13;&#10;.&#13;&#10;[마크다운 에디터 사용법]&#13;&#10;1. 엔터를 두번 치면 줄바꿈이 됩니다.&#13;&#10;2. 코드의 처음과 끝에 ~~~을 입력하면 코드 창으로 바뀝니다.&#13;&#10;3. ~~~옆에 개발 언어를 입력하면 자동으로 하이라이팅 됩니다.&#13;&#10;.&#13;&#10;Ex)&#13;&#10;~~~javascript&#13;&#10;여기에 코드를 입력하세요.&#13;&#10;~~~"
          {...register('content', {
            required: 'content를 입력하세요',
          })}
        />
      </LayoutWrap>

      <Markdown title={watch('title')} content={watch('content')} />
    </LayoutWrap>
  );
};

export default Write;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: var(--text-color);
`;

const Textarea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 24px;
  font-family: 'Poor Story';
  font-size: 1.4rem;
  line-height: 1.7rem;
  background-color: transparent;
  color: var(--text-color);
`;
