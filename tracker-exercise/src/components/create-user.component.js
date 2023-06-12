import { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username : '',
        }
    }
    onChangeUserName(e) {
        this.setState ({
            username:e.target.value
        })

    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            userName: this.state.username,
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
             .then(res  => console.log(res.data))
             .catch(err => console.log(err));
        this.setState({
            username:''
        })

       // window.location = '/';

    }
  
    render(){
        return (
            <div>
                <h3> Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>
                            Username:
                        </label>
                        <br/>
                        <input
                            type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Center User" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
            );
    }
    
}