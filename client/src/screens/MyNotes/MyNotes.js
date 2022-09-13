import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Sakthivel Seenivasan..">
      <Link to="createone">
        <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg">
          Create New Note
        </Button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
