import React from "react";
import { v4 as uuid } from "uuid";
import { useState, useRef, useContext } from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Datacontext } from "../../context/Dataprovider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin-left: 300px;
  min-height: 30px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);

  const [addNotes, setAddNotes] = useState({ ...note, id: uuid() });

  const { setNotes } = useContext(Datacontext);

  const containerRef = useRef();

  const TextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    setAddNotes({ ...note, id: uuid() });
    if (addNotes.heading || addNotes.text) {
      setNotes((prevArr) => [addNotes, ...prevArr]);
    }
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNotes, [e.target.name]: e.target.value };
    setAddNotes(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBotton: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNotes.heading}
          />
        )}
        <TextField
          placeholder="Take a note...."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={TextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNotes.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
