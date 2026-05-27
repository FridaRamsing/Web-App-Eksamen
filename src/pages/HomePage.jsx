import reactRouterLogo from "../assets/example.svg";

const publicLogoUrl = `${import.meta.env.BASE_URL}logo.webp`;

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <p>Welcome to the home page...</p>
      </main>
    </>
  );
}
