import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevInputText) => {
      return {
        ...prevInputText,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: "",
    });
  }

  function handleInputClick() {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
            autoComplete="off"
          />
        )}

        <textarea
          onClick={handleInputClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={inputText.content}
          autoComplete="off"
        />
        <Zoom in={isClicked && true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
