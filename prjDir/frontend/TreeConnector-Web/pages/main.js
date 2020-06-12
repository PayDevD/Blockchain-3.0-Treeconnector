import Layout from '../components/Layout';
import Link from 'next/link';
import Role from '../components/Role';

let path = '';
if (Role[0] === 'user') {
    path = 'usertreatment';
} else if(Role[0] === 'doctor') {
    path = 'doctortreatment';
} else {
    path = 'therapisttreatment';
}

const Main = () => (
    <Layout>
        <style jsx>
            {`
                a {
                    color: white;
                    background-color: green;
                    text-decoration: none;
                    margin: 10em;
                    font-size: 5em;
                }
            `}
        </style>
        <Link href='mytree'><a>내 나무 관리</a></Link><br />
        <Link href='lookup'><a>나무 조회</a></Link><br />
        <Link href={path}><a>나무 진료</a></Link>
    </Layout>
)

export default Main;