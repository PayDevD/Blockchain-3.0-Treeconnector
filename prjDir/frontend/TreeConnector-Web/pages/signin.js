import Layout from '../components/Layout';
import Router from 'next/router'
import accounts from '../components/Accounts';
import ROLE from '../components/Role';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: ''
        };

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePwChange = this.handlePwChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }

    handlePwChange(event) {
        this.setState({pw: event.target.value});
    }

    handleSubmit(event) {
        let flag = false;
        console.log(accounts);
        for (let value of accounts) {
            if(value.id === this.state.id && value.pw === this.state.pw) {
                flag = true;
                ROLE.pop()
                ROLE.push(value.role);
            }
        }
        if(flag) {
            alert("Login Success");
            console.log(`ROLE : ${ROLE}`);
            Router.push('/main')
        }
        else {
            alert("Login failed");
        }

        event.preventDefault();
    }

    render() {
        return(
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
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )

    }
}

export default SignIn;