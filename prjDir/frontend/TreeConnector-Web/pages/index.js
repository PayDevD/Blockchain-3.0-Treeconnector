import Link from 'next/link'
import Layout from '../components/Layout';

const style = {
    margin: 'auto 0',
    marginLeft: '2vw',
    marginRight: '2vw',
    display: 'inline-block',
    backgroundColor: 'rgb(163, 204, 163)',
    color: 'white',
    fontSize: '5vh',
    textDecoration: 'none',
    padding: '8vh'
}

const divStyle = {
    paddingLeft: '30vw',
    paddingTop: '25vh'
}

const Index = () => (
    <Layout>
        <div style={divStyle}>
            <Link href="/signin">
                <a style={style}>로그인</a>
            </Link>
            <Link href="/signup">
                <a style={style}>회원가입</a>
            </Link>

        </div>
    </Layout>
);

export default Index;