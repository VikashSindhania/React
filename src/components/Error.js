// React Router Dom  gives us an access to important hook. A hook is a function at the end of the Day.
import { useRouteError } from "react-router-dom"; // whenever u see "use" in useRouteError you understand that it is a hook.  its a common convention used in React Industry

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong...</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
