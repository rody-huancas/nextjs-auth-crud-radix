"use client";

import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

const SigninForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2" className="mt-5">
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "El E-mail es requerido",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Root
                  type="email"
                  placeholder="email@domain.com"
                  autoFocus
                  {...field}
                >
                  <TextField.Slot>
                    <EnvelopeClosedIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              );
            }}
          />
          {errors.email && (
            <Text color="red" size="1">
              {errors.email.message}
            </Text>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "La contraseña es requerido",
                value: true,
              },
              minLength: {
                message: "La contraseña debe tener al menos 6 caracteres",
                value: 6,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Root
                  type="password"
                  placeholder="****************"
                  {...field}
                >
                  <TextField.Slot>
                    <LockClosedIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              );
            }}
          />
          {errors.password && (
            <Text color="red" size="1">
              {errors.password.message}
            </Text>
          )}
        </div>

        <Button type="submit" className="mt-5">
          Iniciar Sesión
        </Button>
      </Flex>
    </form>
  );
};

export default SigninForm;
