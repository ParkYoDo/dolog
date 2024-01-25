import postApi from '@apis/reactQuery/postApi';
import ImageIcon from '@components/Svg/ImageIcon';
import { IconButton, LayoutWrap } from '@styles/GlobalStyle';
import axios from 'axios';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const WriteSlideMenu = (props: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { getPresignedUrl } = postApi();
  const [thumnnailImage, setThumbnailImage] = useState('');

  console.log(props.thumbnailText);
  console.log(props.isShow);

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
      <img src={thumnnailImage} alt="not upload" />
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
    </WritePageMenu>
  );
};

export default WriteSlideMenu;

const WritePageMenu = styled(LayoutWrap)<{ isShow: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid yellow;
  transition: all 0.25s ease-in-out;

  ${props =>
    props.isShow
      ? css`
          opacity: 1;
          background-color: red;
          transform: translateY(0);
        `
      : css`
          border: 1px solid red;
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
