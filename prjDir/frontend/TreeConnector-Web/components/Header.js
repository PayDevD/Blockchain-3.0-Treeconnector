import Link from 'next/link';

const linkStyle = {
    float: 'right',
    margin: '1vh',
    display: 'inline-block',
    backgroundColor: 'rgb(163, 204, 163)',
    color: 'white',
    fontSize: '5vh',
    marginBottom: '1vh',
    textDecoration: 'none',
    paddingLeft: '2vh',
    paddingRight: '2vh'
}

const navStyle = {
    display: 'inline-block',
    backgroundColor: 'rgb(181, 214, 146)',
    width: '100vw',
    height: '8vh',
    paddingBottom: '2vh'
}

const Header = () => {
    return (
        <div style={navStyle}>
            <Link href="/main"><a style={linkStyle}>메인으로</a></Link>
            <Link href="/"><a style={linkStyle}>초기 화면으로</a></Link>
        </div>
    );
};

export default Header;