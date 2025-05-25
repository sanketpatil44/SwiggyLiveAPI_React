import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
      <p>We are unable to load the requested page. Please try again later.</p>
      <p>If the problem persists, please contact support.</p>
    </div>
  );
};

export default Error;
