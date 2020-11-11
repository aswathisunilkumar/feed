import React,{useState} from 'react'
import '../App.css';



function UserFeed() {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        const tempData=[...list];
        tempData.push(text);
        setList(tempData);
        setText("");
    }
    
    return(
        <div className="main">
            <div className="card">
                <h3>ABOUT</h3>
                <div class="description">
                    <h5>Web developer</h5> 
                    <h5>Currently working in Y Media Labs</h5> 
                    <h5>Studied at ABC institute of technology</h5> 
                    <h5>Bangalore, India</h5>
                </div>
            </div>
            <div class="container">
                <form onSubmit={addItem}>
                    <input className="input-container" placeholder="What's on your mind?" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                    <button className="button-class" value="Submit">Add Comment</button>
                </form>
                {
                    list.map((item,key) => {
                       return (
                            <div className="comment-card" key={key}>{item}</div>
                        )
                    }) 
                }  
            </div>
        </div>
    );
}


export default UserFeed;

