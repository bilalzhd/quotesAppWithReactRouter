import { useEffect } from "react";
import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote);

    useEffect(() => {
      sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }
    if(error) {
        return <p className="centered focused">{error}</p>
    }
    if(!loadedQuote) {
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Outlet />
            <Outlet />
        </Fragment>
    )
}

export default QuoteDetail;