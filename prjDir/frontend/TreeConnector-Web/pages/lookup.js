import Layout from '../components/Layout';
import axios from 'axios';
import API_URL from '../components/ApiUrl';
import Link from 'next/link';

class LookUp extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get(API_URL + '/listtrees');
        return  {
            trees: response.data.response
        }
    }
    
    render() {

        const { trees } = this.props;

        if(typeof trees === "undefined") {
            <Layout>
                나무 조회
                <ul>
                    {treeList}
                </ul>
            </Layout>
        }
        else {
            const treeList = trees.map(
                tree => <li key={tree.Id}><Link href="/treeinfo?treeid=1"><a>{tree.Id}</a></Link></li>
            )
            return (
                <Layout>
                    나무 조회
                    <ul>
                        {treeList}
                    </ul>
                </Layout>
            )
        }
    }

}

export default LookUp;