import { Button, Flex, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";

const SigninForm = () => {
  return (
    <Flex direction="column" gap="2" className="mt-5">
      <label htmlFor="email">Email</label>
      <TextField.Root type="email" placeholder="email@domain.com" autoFocus>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Password</label>
      <TextField.Root type="password" placeholder="****************" className="mb-5">
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Button>Iniciar Sesión</Button>
    </Flex>
  );
};

export default SigninForm;
