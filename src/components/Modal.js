import React  from 'react';
import Detail from './movies/Detail';
import { 
    useHistory,
    useParams
  } from "react-router-dom";

  
  function Modal() {
    let history = useHistory();
    let { id } = useParams(); 
    let back = e => { //TODO: dışarı tıkladığında kapanma eklenecek
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "fixed",
            background: "#fff",
            top: 25,
            bottom: 25,
            left: "10%",
            right: "10%",
            overflow: "auto",
            padding: 15,
            border: "2px solid #444"
          }}
        > 
         
          <button type="button" onClick={back}>
            Close
          </button>
          <Detail id={id}/>
        </div>
      </div>
    );
  }
 
  export default Modal