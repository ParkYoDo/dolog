import Modal from '@components/Modal/Modal';
import useAuth from '@apis/reactQuery/authApi';
import useModal from '@hooks/useModal';
import { Button, Form, Input } from '@styles/GlobalStyle';
import { IAuthSignUp } from '@type/authInterface';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignUpModal = () => {
  const { onCloseModal } = useModal();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthSignUp>({
    defaultValues: {
      id: '',
      password: '',
      name: '',
    },
  });

  const onSignUp: SubmitHandler<IAuthSignUp> = data => {
    signUp(data);
  };

  const content = (
    <Form
      onKeyDown={e => {
        if (e.key === 'Enter') handleSubmit(onSignUp)();
      }}
    >
      <Input
        type="text"
        placeholder="Id"
        {...register('id', {
          required: 'id를 입력하세요',
        })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'password를 입력하세요',
        })}
      />
      <Input
        type="name"
        placeholder="Name"
        {...register('name', {
          required: 'name을 입력하세요',
        })}
      />
      {errors.id?.message || errors.password?.message || errors.name?.message}
    </Form>
  );

  const buttons = [
    <Button onClick={handleSubmit(onSignUp)}>SignUp</Button>,
    <Button onClick={onCloseModal}>Cancel</Button>,
  ];

  return <Modal title="Sign Up" content={content} buttons={buttons} />;
};

export default SignUpModal;
