import ResumeCard from "./ResumeCard";
import EducationCard from "./EducationCard";
import PublishedWorkCard from "./PublishedWorkCard";
import { Card } from "react-bootstrap";
function Resume(){

    return (
        <div>
        <div style={{paddingBottom:"5%"}}>
        <EducationCard title = {'Bachelors with Honors in Computer Science'} title2={'Bachelors with Honors in Mathematics'} timeframe="August 2021 - December 2024" company></EducationCard>
        </div>
            <h2 className="Name" id="Software" style={{fontSize: 40, marginTop:"1%"}}>Software Engineer</h2>
            <ResumeCard title="Software Developer III" timeframe="February 2025 - Present" company="Paycom Software Inc." 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <ResumeCard title="Software Developer Intern" timeframe="May 2023 - August 2024" company="Paycom Software Inc." 
            description="Automated library checkout system for employees by creating a C# .NET App, utilizing a MySQL Database and creating a React front-end with both admin and user capabilities. I implemented asynchronous data population throughout a React SPA through queries to an SQL database. 
            Led a technical course over the summer spanning multiple weeks focused on clean code concepts. Led hackathon team to a 1st place victory as team captain in intern-wide hackathon. Additionally, I worked on a Full Stack application utilizing C# .NET and React that allowed a non-technical user to create XML files that would facilitate onboarding of new clientele, leading to a large increase in data transition efficiency. Translated JSON objects into an XML format that were sent from a React SPA into a C# backend."/>
            <ResumeCard title="NSF IRES Intern" timeframe="May 2022 - August 2022" company="Oklahoma State University and ENSAM University" 
            description="Performed virtual reality research at ENSAM university utilizing Unity and SteamVR technology with a focus on HCI. Participants were able to achieve a 30% increase in medical knowledge after undergoing the simulation"/>
            <h2 className ="Name" id="Research" style={{fontSize: 40, marginTop:"1%"}}>Researcher</h2>
            <ResumeCard title="Virtual Reality Simulation of Knot Deformation" timeframe="December 2023 - December 2024" company="Mathematics Honors Thesis, Advised by Dr. Henry Segerman" 
            description="Utilized Unity to render Knots in a 3D environment with a focus on efficiency and user experience. C# was utilized for various algorithms"/>
            <ResumeCard title="Multimodal Aspect Based Sentiment Analysis Cross-Modal Model" timeframe="August 2023 - May 2024" company="Computer Science Honors Thesis, Advised by Dr. Arun Bagavathi" 
            description="Used Pytorch and Google Colab to create a model that predicted the sentiment of certain aspects in a given text image pair. Particularly by following a cross modal method where image and text features were related to construct a more accurate sentiment predicition"/>
            <PublishedWorkCard title="Effect of Tactile Affordance During the Design of Extended Reality-Based Training Environments for Healthcare Contexts" publishedInfo="ACM, July 2023"
            description="Insert Abstract Here"/>
            <PublishedWorkCard title="Disassociation of Visual-proprioception Feedback to Enhance Endotracheal Intubation" publishedInfo="IEEE, February 2023"
            description="Insert Abstract Here"/>
            <h2 className ="Name" id="Community" style={{fontSize: 40, marginTop:"1%"}}>Community Builder</h2>
            <ResumeCard title="Association for Computer Machinery - OSU" timeframe="August 2023 - May 2024" company="President" 
            description="Hosted meetings at various topics, giving presentations on important technology, such as React and Git. Hosted and volunteered at Hackathons with 50+ attendees as well as led OSU’s NASA Suits team"/>
            <ResumeCard title="Off Campus Student Association" timeframe="August 2023 - May 2024" company="President" 
            description="Led Meetings every week to discuss events, legislation, and off campus student concerns. Organized 12+ events over the school year with 100+ student attendance"/>
            <ResumeCard title="Student Government Association" timeframe="August 2022 - December 2024" company="Budget Chair, Senator" 
            description="•	Passed legislation that provided over $10,000+ to various student organizations"/>
            <ResumeCard title="Board of Directors Stout Hall" timeframe="August 2021 - May 2022" company="Director" 
            description="Dig up old resume to put here"/>

         </div>
    );
}
export default Resume;
