// const Hello = function(){
//     return <p>Hello</p>
// };



export default function Hello() {
    function showname() {
        console.log("Jeong");
    }
    function showText(e){
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showname}>Show_name</button>

            <button
                onClick={ () => {
                    console.log(25);
                }
                }
            >Show_age</button>
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value)
                }
            } />
        </div>
    )
    
}