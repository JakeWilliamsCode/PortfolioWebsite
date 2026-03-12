import ResumeCard from "./ResumeCard";
import EducationCard from "./EducationCard";
import Descriptions from "../assets/Descriptions.json";

function Resume(){

    const items = Descriptions.Descriptions;


    const getProfessionalCards = () => {
    const ProfessionalCards = items[0].Cards;
        return ProfessionalCards.map((card) => (
            <ResumeCard 
                title={card.title}
                timeframe={card.timeframe}
                company={card.company}
                description={card.description}
            />
        ));
    };
    const getResearchCards = () => {
    const ResearchCards = items[1].Cards;
        return ResearchCards.map((card) => (
            <ResumeCard 
                title={card.title}
                timeframe={card.timeframe}
                company={card.company}
                description={card.description}
                links={'links' in card ? card.links : undefined}
            />
        ));
    };
    const getCommunityCards = () => {
    const CommunityCards = items[2].Cards;
        return CommunityCards.map((card) => (
            <ResumeCard 
                title={card.title}
                timeframe={card.timeframe}
                company={card.company}
                description={card.description}
            />
        )
    );
    };

    return (
        <div>
        
        <div style={{paddingBottom:"5%"}}>
        <EducationCard title = {'Bachelors with Honors in Computer Science'} title2={'Bachelors with Honors in Mathematics'} timeframe="August 2021 - December 2024" company></EducationCard>
        </div>
            <h2 className="Name" id="Software" style={{fontSize: 40, marginTop:"1%"}}>Software Engineer</h2>
            {getProfessionalCards()}
            <h2 className ="Name" id="Research" style={{fontSize: 40, marginTop:"1%"}}>Researcher</h2>
            {getResearchCards()}
            <h2 className ="Name" id="Community" style={{fontSize: 40, marginTop:"1%"}}>Community Builder</h2>
            {getCommunityCards()}
            <div style={{padding: '32px'}}></div>
         </div>
    );
}
export default Resume;
