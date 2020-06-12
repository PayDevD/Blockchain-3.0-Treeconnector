import Layout from '../components/Layout';
import axios from 'axios';

class UserTreatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            doctor: '',
            symptom: '',
        };

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDoctorChange = this.handleDoctorChange.bind(this);
        this.handleSymptomChange = this.handleSymptomChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleDoctorChange(event) {
        this.setState({doctor: event.target.value});
    }

    handleSymptomChange(event) {
        this.setState({symptom: event.target.value});
    }

    handleSubmit(event) {
        alert('접수 완료');
        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        지역:
                        <select value={this.state.location} onChange={this.handleLocationChange}>
                            <option value="seoul">Seoul</option>
                            <option value="Daejeon">Daejeon</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        의사:
                        <select value={this.state.doctor} onChange={this.handleDoctorChange}>
                            <option value="bob">Bob 4.7/5.0</option>
                            <option value="bill">Bill 4.5/5.0</option>
                            <option value="benjamin">Benjamin 4.0/5.0</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        나무ID:
                        <select >
                            <option value="1">1</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        증상:
                        <select value={this.state.symptom} onChange={this.handleSymptomChange}>
                            <option value="잎이 노랗게 변함">잎이 노랗게 변함</option>
                            <option value="나무 껍질이 벗겨짐">나무 껍질이 벗겨짐</option>
                            <option value="나뭇잎에 구멍이 남">나뭇잎에 구멍이 남</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )
    }


}
export default UserTreatment;