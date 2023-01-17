import React from "react";
// import imgA from './조던.jpg'
import './styles.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            files: []
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        var files = e.target.files;
        // slice : 얕은 복사 (원본 데이터 보존)
        // call : 상위의 context를 변경하는 메서드
        var fileArr = Array.prototype.slice.call(files);
        // ... : 전개연산자 -> 정해지지않은 갯수의 매개변수
        this.setState({files: [...this.state.files, ...fileArr]})
    }
    // !=, !== more strict -> 문자1 숫자1이 다름
    removeFile(f){
        this.setState({files:this.state.files.filter(x=> x!==f)})
    }


        
    render(){
        return(
            <form>
                <div>
                    <label className="custom-file-upload">
                        <input type="file" onChange={this.onChange}/>
                        파일업로드
                        <img src="img/조던.jpg"></img>
                    </label>
                    {/* {
                        this.state.files.map(X=> <div className="file-preview" onClick={this.removeFile.bind(this,x)}>{X.name}</div>)
                    } */}
                </div>
                {/* <div>
                    <a href="#">전송</a>
                </div> */}
                {/* <img src={imgA} width="500px" height="500px"></img> */}
            </form>
        )
    };


}

export default Main;