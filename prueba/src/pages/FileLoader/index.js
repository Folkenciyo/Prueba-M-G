import React, { useState, useEffect } from "react";
import "./styles.css";

const FileLoader = () => {

  const [files, setFiles] = useState({});

  const handleChangeFile = (event) => {
    setFiles({...files, ...event.target.files});
  };

  useEffect(() =>{console.log(files)},[files] )

  return (
    <>
      <div className="Fileloader">
        <h3>Arrastra tu archivo aquí</h3>
        <form>
          <div className="Fileupoader" >
            <input
              className="Fileupoader"
              type="file"
              accept="file"
              multiple
              onChange={handleChangeFile}
            />
          </div>
        </form>
        <div className="FilesList">
          <p>{"files.name"}</p>
          <span>{"file.size"} </span>
        </div>
      </div>
    </>
  );
};
export default FileLoader;
