import Layout from '../components/Layout';
import axios from 'axios';
import qs from 'qs';
import accounts from '../components/Accounts';
import API_URL from '../components/ApiUrl'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
            name: '',
            role: 'user'
        };

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePwChange = this.handlePwChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }

    handlePwChange(event) {
        this.setState({pw: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleRoleChange(event) {
        this.setState({role: event.target.value});
    }

    handleSubmit(event) {
        const data = qs.stringify({
            "Id": this.state.id,
            "Name": this.state.name,
            "Role": this.state.role
        })
        
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }

        axios({
            url: API_URL + '/adduser',
            method: 'post',
            data: data
        })
        .then(res => {
            alert("가입이 완료되었습니다.");
            accounts.push({'id': this.state.id, 'pw': this.state.pw, 'role': this.state.role});
            console.log(accounts);
        })
        .catch(err => {
            alert(err);
        })

        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input type="text" value={this.state.id} onChange={this.handleIdChange} />
                    </label>
                    <br />
                    <label>
                        PW:
                        <input type="password" value={this.state.pw} onChange={this.handlePwChange} />
                    </label>
                    <br />
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <br />
                    <label>
                        Role:
                        <select value={this.state.role} onChange={this.handleRoleChange}>
                            <option value="user">User</option>
                            <option value="doctor">Doctor</option>
                            <option value="therapist">Therapist</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )
    }
}

export default SignUp;