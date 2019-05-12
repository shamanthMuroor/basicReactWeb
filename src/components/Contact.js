import React from 'react';
// import {db} from '../App';

class Contact extends React.Component {
    state = {
        name: '',
        age: 0,
        email: '',
        msg: ''
    }

    // componentWillMount = () => {
    //         db.collection("contactFromWeb").add({
    //         name: this.state.name,
    //         age: this.state.age,
    //         email: this.state.email,
    //         msg: this.state.msg
    //         })
    //         .then(() => {
    //             alert("Data uploaded");
    //         })
    //         .catch((err) => console.log(err))
    //         console.log("sent successfully");
    // }

    saveName = (e) => {
        this.setState({name: e.target.value});
    }

    saveAge = (e) => {
        this.setState({age: e.target.value});
    }
    
    saveEmail = (e) => {
        this.setState({email: e.target.value});
    }

    saveMsg= (e) => {
        this.setState({msg: e.target.value});
    }

    submit = () => {
        alert("Sent succesfully");
    }

    render() {
        return (
            <div className="row about" style={{height:'100%'}}>
            <div className="col-md-8 bg-light">
                <h4 className="my-4 text-center">Contact Us</h4><hr />
                <form>
                    <div className="form-group">
                        <label>Name:</label><span> </span>
                        <input 
                            type="text"
                            name="text"
                            onChange={this.saveName} 
                            placeholder="Enter name" 
                            autoFocus="autoFocus"
                        />
                    </div>                    
                    <div className="form-group">
                        <label>Age:</label><span> </span>
                        <input 
                            type="number" 
                            name="age"
                            onChange={this.saveAge} 
                            placeholder="Enter Age"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label><span> </span>
                        <input 
                            type="email" 
                            name="email"
                            onChange={this.saveEmail} 
                            placeholder="Enter email"
                        />
                    </div>                    
                     <div className="form-group">
                        <label>Message: </label><br />
                        <textarea 
                            rows="5" 
                            cols="70" 
                            onChange={this.saveMsg} 
                            placeholder="Type your message here..."
                        />
                    </div>
                    <button 
                        className="btn btn-primary my-2 " 
                        // onClick={this.componentWillMount}
                        onClick={this.submit}
                    >Send
                    </button>
                </form>
                
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
                 <h5 className=" text-center">Sidebar</h5>
                 <ul type="disc">
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                 </ul>
            </div>
        </div>
        )
    }
}

export default Contact;