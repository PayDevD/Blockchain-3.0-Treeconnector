import Link from 'next/link';

const linkStyle = {
    marginRight: '1rem'
}

const titleStyle = {
    
}

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>초기 화면으로</a></Link>
            <Link href="/main"><a style={linkStyle}>메인으로</a></Link>
        </div>
    );
};

export default Header;