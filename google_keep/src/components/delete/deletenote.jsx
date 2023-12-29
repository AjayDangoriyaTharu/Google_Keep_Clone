import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import Restore from "@mui/icons-material/RestoreFromTrashOutlined";

//Data_Provider.........
import { Datacontext } from "../../context/Dataprovider";
//Styles_CSS...........
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Deletenotee = ({ note }) => {
  //Data......................
  const { notes, setNotes, deletedNotes, setdeletedNotes } =
    useContext(Datacontext);

  //Updated...Data........................
  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setdeletedNotes(updatedNotes);
    setNotes((preArr) => [note, ...preArr]);
  };
  const deleteNote = () => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setdeletedNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "170px" }}
          onClick={() => deleteNote(note)}
        />
        <Restore
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => restoreNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Deletenotee;
