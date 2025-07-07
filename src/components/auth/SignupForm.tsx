import { Button, Flex, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";

const SignupForm = () => {
  return (
    <Flex direction="column" gap="2" className="mt-5">
      <label htmlFor="name">Nombre</label>
      <TextField.Root type="text" placeholder="John Doe" autoFocus>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root type="email" placeholder="email@domain.com">
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

      <Button>Registrarse</Button>
    </Flex>
  );
};

export default SignupForm;
