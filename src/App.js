import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import './App.css';
import hello from './component/Linkicon.js'
import logo from './man.PNG'
import React, { useState } from 'react';

function App() {


  let [Like, Likestack] = useState(0);
  let [Love, Lovestack] = useState(0);
  
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
    <div className="App">
      <div className="title">
        <h1>내 동물관상</h1>
      </div>
      <div className="smalltitle">
      <h3>이미지 업로드</h3>
      </div>
      <div className="image">
      <table>
        <tbody>
          <tr>
            <td>
              <div>
              <div style={{margin:'auto'}}>
                {fileImage && (
                  <img
                    alt="이미지 불러오는 중"
                    src={fileImage}
                    style={{ margin: " 0px auto"}}
                    />
                )}
                <div
                  style={{
                    alignItems: "right",
                    justifyContent: "auto",
                    margin:'auto',
                  }}
                >
                  <input style={{margin:'auto'}}
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <button
                    style={{
                      backgroundColor: "lightpink",
                      color: "white",
                      width: "70px",
                      height: "50px",
                      cursor: "pointer",
                      margin:'auto',
                      
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    이미지 삭제
                  </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="button">
        <h2>
          <span style={{cursor: "pointer"}} onClick={ ()=> {Likestack(Like + 1)}}>👍</span> {Like} &nbsp; &nbsp;  
          <span style={{cursor: "pointer"}} onClick={ ()=> {Lovestack(Love + 1)}}>💗</span> {Love}
        </h2>
      </div>
      <div className="comment">
        <h4>설명글 내용 구현</h4>
      </div>
    </div>
    </>
  );
}


export default App;
