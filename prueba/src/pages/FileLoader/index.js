import React, { useState} from "react";
import { Spinner } from "../../components/Spinner";
import "./styles.css";

const FileLoader = () => {
  const [files, setFiles] = useState([]);
  const[loading, setLoading] = useState(false);

  const handleChangeFile = (event) => {
    setLoading(true)
    setFiles([...files, ...event.target.files]);
    //Por consecuente que los archivos se suben muy rápido y no se aprecia la animación 
    //he añadido un temporizador para que pueda apreciarse.
    setTimeout(()=>{setLoading(false)}, 2000)

  };


  return (
    <>
      <div className="Loader">
        <div className="Drag-area">
          <h3>Arrastra tu archivo aquí</h3>
          <h5>Click aquí para seleccionar el archivo</h5>
          <input type="file" value="" multiple onChange={handleChangeFile} />
        </div>
        {loading? <Spinner/>:null}
          {
            files.length > 0 ? ( 
            <div className="FilesList"> 
              <p>Listo para subir</p>
              {files.map((item, index) => (
                <div key={index} className="FilesList__item">
                  <p  className="FilesList__name">{item.name}</p>
                  <p  className="FilesList__size">Tamaño: {item.size} B</p>
                </div>
              ))}
            </div>
            ): null
          }
        
      </div>
    </>
  );
};
export default FileLoader;
