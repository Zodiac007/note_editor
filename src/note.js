import React, { Component } from "react";
import moment from "moment";

class Note extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          {this.props.notes.map((note, i) => {
            return (
              <div className="col-4" key={i}>
                <div className="card mr-2 mt-5">
                  <div
                    className={note.color ? "c" + note.color + " card" : "card"}
                    key={i}
                  >
                    <div className="row" style={{ margin: "10px" }}>
                      <h5
                        className={
                          note.color ? "t" + note.color + " title" : "title"
                        }
                      >
                        Note {i + 1}
                      </h5>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={e => this.props.editClick(e, note)}
                        >
                          <span className="fa fa-pencil"></span>
                          {/* edit */}
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={e => this.props.deleteClick(e, note.id)}
                        >
                          <span className="fa fa-trash"></span>
                          {/* Delete */}
                        </button>
                      </div>
                    </div>

                    <div className="card-body">
                      <p className="card-text">{note.text}</p>
                      <hr style={{ color: "grey" }} />
                      <p>{moment(note.id).format("lll")}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Note;
