import Router from 'next/router';
import Layout from '../components/Layout';
import axios from 'axios';
import qs from 'qs'
import API_URL from '../components/ApiUrl';

class AddTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            ownerId: 'user1',
            kind: 'pine'
        }

        this.handleChangeKind = this.handleKindChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKindChange(event) {
        this.setState({kind: event.target.value});
    }

    handleSubmit(event) {
        const data = qs.stringify({
            "Id":this.state.id,
            "OwnerId":this.state.ownerId,
            "Kind":this.state.kind
        })
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        axios({
            url:API_URL + '/addtree',
            method: 'post',
            data: data,
            headers: headers
        })
        .then(res => {
            alert("등록이 완료되었습니다.");
            Router.push('/mytree');
        })
        .catch(err => {
            alert(err);
        })

        event.preventDefault();
    }

    render() {
        return(
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input type="text" disabled value={this.state.id} />
                    </label>
                    <br />
                    <label>
                        KIND:
                        <select value={this.state.kind} onChange={this.handleKindChange}>
                            <option value="pine">소나무</option>
                            <option value="birch">자작나무</option>
                            <option value="ginkgo">은행나무</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )
    }
}

export default AddTree