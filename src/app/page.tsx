import { css, styled } from "@pigment-css/react";

const mainClass = css({
  padding: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const OnlyInSmallScreen = styled("div")({
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
});

const Title = styled("h1")<{
  size?: "xl" | "l" | "m";
}>({
  fontSize: "2rem",
  fontWeight: "bold",
  variants: [
    {
      props: { size: "xl" },
      style: { fontSize: "3rem" },
    },
    {
      props: { size: "l" },
      style: { fontSize: "2rem" },
    },
    {
      props: { size: "m" },
      style: { fontSize: "1rem" },
    },
  ],
});

const Heading = styled(Title)<{ ["data-error"]?: boolean }>({
  color: (props) => (props["data-error"] ? "red" : "inherit"),
});

export default function Home() {
  return (
    <main className={mainClass}>
      Hello World
      <OnlyInSmallScreen
        sx={{
          backgroundColor: "red",
          px: "2rem",
          pt: "3rem",
          pb: "1rem",
        }}
      >
        Only in small screen
      </OnlyInSmallScreen>
      <Title size="xl">XL Title</Title>
      <Title size="l">L Title</Title>
      <Title size="m">M Title</Title>
      <Heading data-error size="xl">
        Error Heading
      </Heading>
      <Heading>Regular Heading</Heading>
    </main>
  );
}
