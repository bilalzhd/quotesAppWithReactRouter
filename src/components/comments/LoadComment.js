import { Link } from "react-router-dom";
const LoadComment = () => {
    return (<div className="centered">
        <Link className="btn--flat" to={`comments`}>
            Load Comments
        </Link>
    </div>);
}

export default LoadComment;