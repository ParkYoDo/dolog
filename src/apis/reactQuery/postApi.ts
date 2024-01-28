import { post } from '@apis/apis';
import { useMutation, useQueries, useQuery } from 'react-query';

const postApi = (postId?: string) => {
  const getPresignedUrl = useMutation((data: any) => post.getPresignedUrl(data), {
    onSuccess: data => {
      console.log(data);
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

  const uploadPost = useMutation(
    (data: {
      author: string;
      title: string;
      content: string;
      thumbnailImage: string;
      thumbnailText: string;
      url: string;
    }) => post.uploadPost(data),
    {
      onSuccess: data => {
        console.log(data);
      },
      onError: error => {
        console.log(error);
      },
    },
  );

  const getOnePost = useQuery(['asdasd'], () => post.getOnePost(postId!), {
    enabled: !!postId,
  });

  const getPost = useQuery(['post'], () => post.getPost());

  return { getPresignedUrl, uploadS3, uploadPost, getPost, getOnePost };
};

export default postApi;
