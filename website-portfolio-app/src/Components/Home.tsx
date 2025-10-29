import NavigationBar from "./NavigationBar";
import Title from "./Title";
import AboutCard from "./AboutCard";
import Resume from "../Resume/Resume";

function Home() {
  return (
    <div data-bs-theme="dark" className ="background">
      <NavigationBar ></NavigationBar>
      <Title></Title>
      <AboutCard></AboutCard>
      <Resume></Resume>
    </div>
  );
}

export default Home;
