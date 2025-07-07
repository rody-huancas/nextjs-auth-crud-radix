import SigninForm from "@/components/auth/SigninForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NavLink from "next/link";

const LoginPage = () => {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-20">
            <Heading>Inicio de Sesión</Heading>

            <SigninForm />

            <Flex className="mt-3">
              <Text>No tienes una cuenta?</Text>
              <Link asChild>
                <NavLink href="/auth/register" passHref>
                  Registrate
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default LoginPage;
