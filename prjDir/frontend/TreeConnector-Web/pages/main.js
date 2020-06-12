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
                    background-color: rgb(163, 204, 163);
                    text-decoration: none;
                    font-size: 5em;
                    display: inline-block;
                    padding: 2vw;
                    paddingTop: 3vh;
                    paddingBottom: 3vh;
                    margin: 2vw;
                },

                div {
                    padding-left: 18vw;
                    padding-top: 15vh;
                }
            `}
        </style>
        <div>
            <Link href='mytree'><a>내 나무 관리</a></Link>
            <Link href='lookup'><a>나무 조회</a></Link>
            <Link href={path}><a>나무 진료</a></Link>
        </div>
    </Layout>
)

export default Main;