import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import UnArchive from "@mui/icons-material/UnarchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";

//Style..CSS
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Archive = ({ note }) => {
  //Data...
  const { notes, setNotes, setarchiveNotes, setdeletedNotes } =
    useContext(Datacontext);

  //Updates Data..
  const UnarchiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setarchiveNotes(updatedNotes);
    setNotes((preArr) => [note, ...preArr]);
  };
  const deleteNote = () => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setdeletedNotes((preArr) => [note, ...preArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnArchive
          fontSize="small"
          style={{ marginLeft: "170px" }}
          onClick={() => UnarchiveNote(note)}
        />
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
