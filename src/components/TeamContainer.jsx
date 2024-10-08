// react router dom
import { useLoaderData } from "react-router-dom";
import Team from "./Team";

function TeamContainer() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="align-elements grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((team) => {
        return <Team team={team} key={team.id} />;
      })}
    </div>
  );
}

export default TeamContainer;
