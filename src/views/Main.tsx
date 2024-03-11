import './Main.sass';
import Layout from './Layout';
import Job from './Job';

function Main() {
	return (<Layout children={Job()} />);
}

export default Main;