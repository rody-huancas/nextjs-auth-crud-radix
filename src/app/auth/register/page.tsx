import NavLink from "next/link";
import SignupForm from "@/components/auth/SignupForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";

const RegisterPage = () => {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-20">
            <Heading>Registrarse</Heading>

            <SignupForm />

            <Flex className="mt-3" gap="2">
              <Text>Ya tienes una cuenta?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Inicia Sesión
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterPage;
