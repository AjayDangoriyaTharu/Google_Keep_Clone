import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

//Components..........
import Archive from "./Archive";
import EmptyArchive from "./emptyArchive";

//Data_Provider...........
import { Datacontext } from "../../context/Dataprovider";
//Drawer..Styled...........
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  //Data..............
  const { archiveNotes } = useContext(Datacontext);

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {archiveNotes.map((archive) => (
              <Grid item>
                <Archive note={archive} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchive />
        )}
      </Box>
    </Box>
  );
};

export default Archives;
