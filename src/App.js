import { Route, Routes, Navigate } from "react-router-dom";

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments from "./components/comments/Comments";
import LoadComment from "./components/comments/LoadComment";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes' element={<AllQuotes />} />

        <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
          <Route path="" element={<LoadComment />} />
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
