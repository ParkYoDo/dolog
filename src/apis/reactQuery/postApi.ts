import { post } from '@apis/apis';
import { useMutation } from 'react-query';

const postApi = () => {
  const getPresignedUrl = useMutation((data: any) => post.getPresignedUrl(data), {
    onSuccess: data => {
      // console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
  const uploadS3 = useMutation(({ url, data }: any) => post.uploadS3({ url, data }), {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  return { getPresignedUrl, uploadS3 };
};

export default postApi;
