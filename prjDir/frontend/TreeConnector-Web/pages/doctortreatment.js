import Layout from '../components/Layout';
import API_URL from '../components/ApiUrl';
import axios from 'axios';
import qs from 'qs';


class DoctorTreatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'1',
            treeId:'1',
            doctorId:'doctor1',
            content:'',
        }
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleContentChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        const data = qs.stringify({
            "Id": this.state.id,
            "TreeId": this.state.treeId,
            "DoctorId": this.state.doctorId,
            "Content": this.state.content,
            "Timestamp": new Date().toISOString()
        })

        axios({
            url: API_URL + '/adddiagnosis',
            method: 'post',
            data: data
        })
        .then(res => {
            alert('진단서가 등록되었습니다.');
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
                        <input type="text" disabled value={this.state.id} />
                    </label>
                    <br />
                    <label>
                        TreeID:
                        <select value={this.state.treeId}>
                            <option value="1">1</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Content:
                        <textarea value={this.state.content} onChange={this.handleContentChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )
    }

}

export default DoctorTreatment;