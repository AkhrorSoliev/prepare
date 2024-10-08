// react router dom
import { Link } from "react-router-dom";

function Team({ team }) {
  return (
    <div key={team.id}>
      <Link to={`/shop/${team.id}`}>
        <div className="card w-full bg-base-100 shadow-xl">
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
              <button className="btn btn-primary btn-sm btn-block">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Team;
