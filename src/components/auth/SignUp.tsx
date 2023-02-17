import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMsg, Form, Input, Label } from '../../styles/FormStyle'

interface ISignUpForm {
  email: string,
  password: string
}

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignUpForm>()
  const onSubmit: SubmitHandler<ISignUpForm> = data => console.log(data);
  return (
    <>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Регистрация</h1>
        <div>
          <Label htmlFor="email">Почта</Label>
          <Input {...register("email", { required: true })} />
          {errors.email && <ErrorMsg>Email обязателен к заполнению</ErrorMsg>}
        </div>
        <div>
          <Label htmlFor="password">Пароль</Label>
          <Input {...register("password", { required: true })} />
          {errors.password && <ErrorMsg>password обязателен к заполнению</ErrorMsg>}
        </div>

        <button type='submit'>Зарегестрироваться</button>
      </Form>
    </>
  )
}

export default SignUp