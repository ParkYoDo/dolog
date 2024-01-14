import Modal from '@components/Modal/Modal';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import { Button, Form, Input, LayoutWrap } from '@styles/GlobalStyle';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IInput {
  id: string;
  password: string;
}

const LoginModal = () => {
  const { onCloseModal } = useModal();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInput>({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IInput> = data => {
    signUp(data);
  };

  const content = (
    <Form
      onKeyDown={e => {
        if (e.key === 'Enter') handleSubmit(onSubmit)();
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
      {errors.id?.message || errors.password?.message}
    </Form>
  );

  const buttons = [
    <Button onClick={handleSubmit(onSubmit)}>Confirm</Button>,
    <Button onClick={onCloseModal}>Cancel</Button>,
  ];

  return <Modal title="Login" content={content} buttons={buttons} />;
};

export default LoginModal;
