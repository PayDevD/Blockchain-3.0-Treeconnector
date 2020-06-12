import Layout from '../components/Layout';
import Link from 'next/link'
import axios from 'axios';
import API_URL from '../components/ApiUrl'
import Router from 'next/router';

class MyTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    static async getInitialProps ({req}) {
        const response = await axios.get(API_URL + '/listtrees');
        console.log(response.data.response);
        return  {
            trees: response.data.response
        }
    }

    handleAdd(event) {
        event.preventDefault();
        Router.push('/addtree');
    }

    handleUpdate(event) {
        alert("not yet");
        event.preventDefault();
    }

    handleDelete(event) {
        alert("not yet");
        event.preventDefault();
    }
    
    render() {

        const { trees } = this.props;

        if(typeof trees.map === "undefined") {
            console.log(trees)
            return(
                <Layout>
                    내 나무 조회
                    <ul>
                    </ul>
                <input type="submit" value="Add" onClick={this.handleAdd}/>
                <input type="submit" value="Update" onClick={this.handleUpdate}/>
                <input type="submit" value="Delete" onClick={this.handleDelete}/>
                </Layout>
            )
        }
        else {
            const treeList = trees.map(
                tree => <li key={tree.Id}><Link href="/treeinfo?treeid=1"><a>{tree.Id}</a></Link></li>
            )
            return (
                <Layout>
                    내 나무 조회
                    <ul>
                        {treeList}
                    </ul>
                <input type="submit" value="Add" onClick={this.handleAdd}/>
                <input type="submit" value="Update" onClick={this.handleUpdate}/>
                <input type="submit" value="Delete" onClick={this.handleDelete}/>
                </Layout>
            )
        }
    }

}
export default MyTree;