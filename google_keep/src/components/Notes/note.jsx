import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Archive from "@mui/icons-material/ArchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Note = ({ note }) => {
  const { notes, setNotes, setarchiveNotes, setdeletedNotes } =
    useContext(Datacontext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setarchiveNotes((preArr) => [note, ...preArr]);
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
        <Archive
          fontSize="small"
          style={{ marginLeft: "170px" }}
          onClick={() => archiveNote(note)}
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

export default Note;
