import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App1 = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert('i am click')
    setAddItem((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      {/* <Footer /> */}
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </>
  );
};

export default App1;
