import JoinTeam from "../Component/JoinTeam";
import TeamHero from "../Component/TeamHero";
import TeamMembers from "../Component/TeamMembers";
import TeamStatistics from "../Component/TeamStatistics";

const Team = () => {
  return (
    <>
      <TeamHero />
      {/* Other Team Sections */}
      <TeamMembers />
      <TeamStatistics />
      <JoinTeam />
    </>
  );
};

export default Team;