// react router dom
import { Link } from "react-router-dom";

function Team({ team }) {
  return (
    <div key={team.id}>
      <div className="card w-full bg-base-100 py-2 shadow-xl transition-all duration-300 hover:bg-secondary-content">
        <figure>
          <img
            src={team.image}
            alt="Shoes"
            className="h-48 w-full object-contain"
          />
        </figure>
        <div className="p-2 md:p-4">
          <h2 className="mb-3 text-center text-xl font-bold">{team.name}</h2>
          <div className="card-actions justify-center md:justify-end">
            <Link
              to={`/club/${team.id}`}
              className="btn btn-primary btn-sm btn-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
