export default function HomePage(){
    function clicked() {
        alert('button clicked')
    }
    const clickedTwo=()=>{
        alert('second button clicked')
    }
    const addToFour=(num)=>{
        alert(num+4)
    }
    const buttonStyle={
        margin:'5px',
        backgroundColor:'blue',
        color:'white',
        textTransform:'capitalize'
        
    }
    return (
        <div style={{
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
        }}>
            <h2>eventHandler</h2>
            <button style={buttonStyle} onClick={clicked} >simple event handler</button>
            <button style={buttonStyle} onClick={clickedTwo} >arrow function</button>
            <button style={buttonStyle} onClick={()=>{alert('inline event handler')}} >in line event handler</button>
            <button style={buttonStyle} onClick={()=>{addToFour(5)}} >add to four</button>
        </div>
    )
}