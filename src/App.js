import React, { Component } from "react";
import Note from "./note";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      colorValue: "0",
      inputId: 0,
      notes: []
    };
  }

  inputChangeHandler = e => {
    this.setState({ inputValue: e.target.value });
  };

  colorChangeHandler = e => {
    this.setState({ colorValue: e.target.value });
  };

  submitButtonHandler = e => {
    let existingNote = false;
    const newNotes = this.state.notes.map(note => {
      if (note.id === this.state.inputId) {
        existingNote = true;
        const currentNote = note;
        currentNote.text = this.state.inputValue;
        currentNote.color = this.state.colorValue;
        return currentNote;
      } else {
        return note;
      }
    });
    if (existingNote) {
      this.setState({ inputId: 0, notes: newNotes, inputValue: "" });
    } else {
      const newNote = {
        id: new Date().toString(),
        text: this.state.inputValue,
        color: this.state.colorValue
      };
      newNotes.push(newNote);
      this.setState({ inputId: 0, notes: newNotes, inputValue: "" });
    }
    console.log(this.state);
  };

  deleteButtonHandler = (e, id) => {
    const newNotes = [];
    this.state.notes.forEach(note => {
      if (note.id !== id) {
        newNotes.push(note);
      }
    });
    this.setState({ notes: newNotes });
  };

  editButtonHandler = (e, note) => {
    this.setState({
      inputId: note.id,
      inputValue: note.text,
      colorValue: note.color
    });
  };

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <div className="input">
            <label>Note Text</label>
            <input
              className="form-control"
              type="text"
              id="text"
              value={this.state.inputValue}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div className="input">
            <label>Note Color</label>
            <select
              className="form-control"
              id="sell"
              defaultValue={this.state.colorValue}
              onChange={this.colorChangeHandler}
            >
              <option value="0">Indigo</option>
              <option value="1">Purple</option>
              <option value="2">Green</option>
              <option value="3">Red</option>
              <option value="4">Blue</option>
              <option value="5">Orange</option>
            </select>
          </div>
          <div className="button-container">
            <button
              className="btn btn-primary"
              onClick={this.submitButtonHandler}
            >
              Add note
            </button>
          </div>
        </div>
        <Note
          notes={this.state.notes}
          editClick={this.editButtonHandler}
          deleteClick={this.deleteButtonHandler}
        />
      </div>
    );
  }
}
export default App;
