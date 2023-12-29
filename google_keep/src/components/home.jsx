import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MiniDrawer from "./Drawer";
import Notes from "./Notes/notes";
import Archives from "./archive/Archives";
import Deletenotes from "./delete/Deletenotes";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <MiniDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<Deletenotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
