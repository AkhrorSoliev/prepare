// utils
import { axiosInstance } from "../utils";

// components
import { TeamsContainer } from "../components";

// action
export const loader = async () => {
  const response = await axiosInstance.get("/teams");
  return response.data;
};

function Home() {
  return (
    <div className="py-10">
      <TeamsContainer />
    </div>
  );
}

export default Home;
