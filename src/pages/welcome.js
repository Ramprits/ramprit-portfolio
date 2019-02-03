import React from "react";
import { Button } from "@smooth-ui/core-sc";

import Layout from "../components/Layout";
const Welcome = () => {
  return (
    <Layout>
      Welcome to home page!
      <br />
      <Button variant="primary">Hello world!</Button>
    </Layout>
  );
};

export default Welcome;
