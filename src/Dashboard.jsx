import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();

  const username = location.state?.username;

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <h2>
        Welcome, {username}
      </h2>

    </div>
  );
}

export default Dashboard;