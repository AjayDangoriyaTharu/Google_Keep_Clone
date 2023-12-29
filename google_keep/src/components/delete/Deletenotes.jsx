import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

//Componemets.....
import Deletenotee from "./deletenote";
import EmptyDelete from "./emptyDelete";
//DataProvider......
import { Datacontext } from "../../context/Dataprovider";

//Drawer....
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Deletenotes = () => {
  //Data..
  const { deletedNotes } = useContext(Datacontext);
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {deletedNotes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {deletedNotes.map((note) => (
              <Grid item>
                <Deletenotee note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyDelete />
        )}
      </Box>
    </Box>
  );
};

export default Deletenotes;
