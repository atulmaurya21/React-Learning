import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const err = useRouteError();
    
  return (
    <div>
      <span>
        <h1>Opps!!!!!</h1>
      </span>
          <h2>Something went wrong.</h2>
          <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default ErrorPage;
