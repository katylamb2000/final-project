import React from "react";

import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => <Button onClick={initiateLogin}>Login</Button>}
  </AuthConsumer>
);

// className="btn btn-sm btn-primary"

export default Login;
