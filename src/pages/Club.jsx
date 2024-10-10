// react router dom
import { useLoaderData } from "react-router-dom";

// utils
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get(`/teams/${params.id}`);
  return req.data;
};

function Club() {
  const {
    name,
    city,
    colors,
    founded,
    history,
    image,
    kit,
    manager,
    owner,
    rivalries,
    stadium,
    top_scorer,
    trophies,
  } = useLoaderData();
  return (
    <div className="align-elements py-10">
      <div className="flex gap-10 rounded-lg bg-base-200 py-10">
        <div className="flex w-[40%] flex-col items-center gap-2 font-medium">
          <figure className="w-full">
            <img src={image} alt="" className="mx-auto w-full max-w-96" />
          </figure>
          <h1 className="text-4xl">{name}</h1>
          <h3 className="text-2xl">Founded: {founded}</h3>
          <h3 className="text-2xl">
            <span className="flex items-center gap-2">
              <span>Team Colors: </span>
              <span className="flex items-center gap-2">
                {colors.map((color) => (
                  <span
                    style={{ backgroundColor: color.split(" ")[0] }}
                    className="inline-block h-5 w-5 rounded-full border"
                  ></span>
                ))}
              </span>
            </span>
          </h3>
        </div>
        <div className="w-[60%]">
          <h2 className="text-xl font-medium">Team details</h2>
        </div>
      </div>
    </div>
  );
}

export default Club;
