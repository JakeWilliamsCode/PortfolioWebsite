import NavigationBar from "../Components/NavigationBar";
import Title from "../Components/Title";
import AboutCard from "../Components/AboutCard";
import Resume from "../Components/Resume/Resume";
function Home() {
  return (
    <div data-bs-theme="dark" class ="background">
      <NavigationBar ></NavigationBar>
      <Title></Title>
      <AboutCard></AboutCard>
      <Resume></Resume>
    </div>
  );
}

export default Home;
