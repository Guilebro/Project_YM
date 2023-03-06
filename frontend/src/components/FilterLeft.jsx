import React from "react";
import "../css/FilterLeft.css";
import { myContext } from "../context/MyContext";
import {
  ageOption,
  durationOption,
  languageOption,
  playerOption,
} from "../utils/allOption";

function FilterLeft() {
  const { setEditor, fetchAllGames } = myContext();

  const handleChange = (e) => {
    setEditor(e.target.value);
  };

  return (
    <div className="main_filterLeft">
      <div className="doudi">
        <div className="age_select">
          <label htmlFor="age">Age</label>
          <select id="">
            <option value=""> Tous </option>
            {ageOption.map((age) => (
              <option value="">{age.option}</option>
            ))}
          </select>
        </div>
        <div className="duration_select">
          <label htmlFor="duration">Durée</label>
          <select id="">
            <option value=""> Toute </option>
            {durationOption.map((duration) => (
              <option value="">{duration.option}</option>
            ))}
          </select>
        </div>
        <div className="editor_select">
          <label htmlFor="editor">Editeur</label>
          <select id="" onChange={handleChange}>
            <option value=""> Toute </option>
            {fetchAllGames.find &&
              fetchAllGames
                .map((editor) => {
                  return editor.editor;
                })
                .filter((editor, index, self) => {
                  return self.indexOf(editor) === index;
                })
                .map((editor) => <option value={editor}>{editor}</option>)}
          </select>
        </div>
        <div className="language_select">
          <label htmlFor="language">Langue</label>
          <select id="">
            <option value=""> Toute </option>
            {languageOption.map((language) => (
              <option value="">{language.option}</option>
            ))}
          </select>
        </div>
        <div className="player_select">
          <label htmlFor="player">Nb de joueurs</label>
          <select id="">
            <option value=""> Tous </option>
            {playerOption.map((player) => (
              <option value="">{player.option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterLeft;
