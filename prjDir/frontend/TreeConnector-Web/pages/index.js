import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <h2>
            <Link href="/signin">
                <a>로그인</a>
            </Link>
            <Link href="/signup">
                <a>회원가입</a>
            </Link>
        </h2>
    </Layout>
);

export default Index;