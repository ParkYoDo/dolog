import postApi from '@apis/reactQuery/postApi';
import ImageIcon from '@components/Svg/ImageIcon';
import useAuth from '@hooks/useAuth';
import { IconButton, LayoutWrap } from '@styles/GlobalStyle';
import axios from 'axios';
import { useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import styled, { css } from 'styled-components';

const WriteSlideMenu = (props: any) => {
  const { auth } = useAuth();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { getPresignedUrl } = postApi();
  const [thumbnailImage, setThumbnailImage] = useState('');

  const { uploadPost } = postApi();

  const onSubmit: SubmitHandler<{
    title: string;
    content: string;
    thumbnailText: string;
    url: string;
  }> = input => {
    console.log(input);
    uploadPost.mutate(
      { ...input, thumbnailImage, author: auth?.uuid },
      {
        onSuccess: () => {},
      },
    );
  };

  return (
    <WritePageMenu isShow={props.isShow}>
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
              try {
                console.log(data);
                const result = await axios.put(data, file, {
                  headers: { 'Content-Type': file.type },
                });
                if (result.status === 200) {
                  setThumbnailImage(
                    `https://pyd-blog.s3.ap-northeast-2.amazonaws.com/images/${fileName}`,
                  );
                }
              } catch (error) {
                console.log(error);
              }
            },
          });
          e.target.value = '';
        }}
      />
      <IconButton onClick={() => fileInputRef.current?.click()}>
        <ImageIcon />
      </IconButton>
      썸네일 이미지
      <img src={thumbnailImage} alt="not upload" width="360px" height="180px" />
      썸네일 텍스트
      <input {...props.thumbnailText} />
      Post Url
      <input {...props.url} />
      <button
        onClick={() => {
          props?.setState(false);
        }}
      >
        뒤로가기
      </button>
      <button onClick={props?.handleSubmit(onSubmit)}>제출</button>
    </WritePageMenu>
  );
};

export default WriteSlideMenu;

const WritePageMenu = styled(LayoutWrap)<{ isShow: boolean }>`
  position: absolute;
  flex-direction: column;
  background-color: #333333;
  transition: all 0.5s ease-in-out;

  ${props =>
    props.isShow
      ? css`
          opacity: 1;

          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(100%);
        `}
`;

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
