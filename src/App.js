import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";
function App() {
 const navItem = [
          { id: 1, text: "Home" },
          { id: 2, text: "Service" },
          { id: 3, text: "Contact" },
          { id: 4, text: "Faq" },
          { id: 5, text: "Login" },
        ];
  const teamMembers=[
    {id:1,nom:"Abdelkader Lounis",text:"Deserunt officia dolore qui dolor Lorem cillum cillum enim quis tempor commodo. Quis sunt incididunt voluptate culpa veniam magna dolore. Amet cillum eu officia fugiat laborum laboris. Aliquip sit commodo duis sint aliqua consequat et cillum sit ipsum excepteur eu exercitation. Aute ad consequat magna quis sint aute id ea. Culpa irure mollit dolore duis ut aute in sunt."},
    {id:2,nom:"Ikrouberkane Said",text:"Deserunt officia dolore qui dolor Lorem cillum cillum enim quis tempor commodo. Quis sunt incididunt voluptate culpa veniam magna dolore. Amet cillum eu officia fugiat laborum laboris. Aliquip sit commodo duis sint aliqua consequat et cillum sit ipsum excepteur eu exercitation. Aute ad consequat magna quis sint aute id ea. Culpa irure mollit dolore duis ut aute in sunt."},
    {id:3,nom:"Lonipierre louis",text:"Deserunt officia dolore qui dolor Lorem cillum cillum enim quis tempor commodo. Quis sunt incididunt voluptate culpa veniam magna dolore. Amet cillum eu officia fugiat laborum laboris. Aliquip sit commodo duis sint aliqua consequat et cillum sit ipsum excepteur eu exercitation. Aute ad consequat magna quis sint aute id ea. Culpa irure mollit dolore duis ut aute in sunt."},
  ]
  return (
    <div className="App">
      <Header items={navItem}/>
      <HeroSection/>
      <AboutSection/>
      <FeatureSection/>
      <TeamSection teamMembers={teamMembers} />
      <Footer/>
    </div>
  );
}

export default App;
