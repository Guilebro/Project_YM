import React from "react";
import "../css/FilterLeft.css";
import { myContext } from "../context/MyContext";

function FilterLeft() {
  const {
    setEditor,
    fetchAllGames,
    setLanguage,
    setPlayer,
    setAge,
    setDuration,
  } = myContext();

  const editorSelect = (e) => {
    setEditor(e.target.value);
  };

  const languageSelect = (e) => {
    setLanguage(e.target.value);
  };

  const playerSelect = (e) => {
    setPlayer(e.target.value);
  };

  const ageSelect = (e) => {
    setAge(e.target.value);
  };

  const durationSelect = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className="main_filterLeft">
      <div className="all_selects">
        <div className="age_select">
          <label htmlFor="age">Age</label>
          <select id="" onChange={ageSelect}>
            <option value=""> Tous </option>
            {fetchAllGames
              .map((age) => {
                return age.age;
              })
              .filter((age, index, self) => {
                return self.indexOf(age) === index;
              })
              .map((age) => (
                <option value={age}>{`à partir de ${age} ans`}</option>
              ))}
          </select>
        </div>
        <div className="duration_select">
          <label htmlFor="duration">Durée</label>
          <select id="" onChange={durationSelect}>
            <option value=""> Toute </option>
            {fetchAllGames
              .map((duration) => {
                return duration.duration;
              })
              .filter((duration, index, self) => {
                return self.indexOf(duration) === index;
              })
              .map((duration) => (
                <option value={duration}>{duration}</option>
              ))}
          </select>
        </div>
        <div className="editor_select">
          <label htmlFor="editor">Editeur</label>
          <select id="" onChange={editorSelect}>
            <option value=""> Toute </option>
            {fetchAllGames
              .map((editor) => {
                return editor.editor;
              })
              .filter((editor, index, self) => {
                return self.indexOf(editor) === index;
              })
              .map((editor) => (
                <option value={editor}>{editor}</option>
              ))}
          </select>
        </div>
        <div className="language_select">
          <label htmlFor="language">Langue</label>
          <select id="" onChange={languageSelect}>
            <option value=""> Toute </option>
            {fetchAllGames
              .map((language) => {
                return language.language;
              })
              .filter((language, index, self) => {
                return self.indexOf(language) === index;
              })
              .map((language) => (
                <option value={language}>{language}</option>
              ))}
          </select>
        </div>
        <div className="player_select">
          <label htmlFor="player">Nb de joueurs</label>
          <select id="" onChange={playerSelect}>
            <option value=""> Tous </option>
            {fetchAllGames
              .map((number) => {
                return number.nb_players;
              })
              .filter((number, index, self) => {
                return self.indexOf(number) === index;
              })
              .map((number) => (
                <option value={number}>{number}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterLeft;
