import Layout from '../components/Layout';
import axios from 'axios';
import API_URL from '../components/ApiUrl';

class TreeInfo extends React.Component {
    static async getInitialProps ({req}) {
        const diagnoses = await axios.get(API_URL + '/listdiagnoses');
        const treatments = await axios.get(API_URL + '/listreatments');
        return {
            diagnoses: diagnoses.data.response,
            treatments: treatments.data.response
        }
    }

    render() {
        const { diagnoses, treatments } = this.props;
        const diagnosisList = diagnoses.map(
            diagnosis => <li key={diagnosis.Id}>{diagnosis.Content} / {new Date(diagnosis.Timestamp).toUTCString()} / 담당 : {diagnosis.DoctorId}</li>
        )
        const treatmentList = treatments.map(
            treatment => <li key={treatment.Id}>{treatment.Content} / {new Date(treatment.Timestamp).toUTCString()} / 담당 : {treatment.TherapistId}</li>
        )

        return(
            <Layout>
                진단서 리스트
                <ul>{diagnosisList}</ul><br />
                치료 내역 리스트
                <ul>{treatmentList}</ul>
            </Layout>
        )
    }
}

export default TreeInfo;