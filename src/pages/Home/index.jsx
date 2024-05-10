import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-3">
        <Button onClick={() => changeTheme()}>
          Change to {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>

    </div>
  );
};

export default Home;
