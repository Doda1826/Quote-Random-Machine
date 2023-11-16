import React from "react";
import { connect } from "react-redux";
import fetchQuote from "./redux/actions";
import './style.css';

const QuoteMachine = ({ quotes, fetchQuote}) => {
    const generateQuote = () => {
        fetchQuote();
    }

    return (
        <div className="" id="quote-body">
            <h1 className="bg-main text-center" id="quote-heading">Random Quote Machine</h1>
            <button onClick={generateQuote} className="btn btn-outline-primary">Generate Quote</button>
            <ul id="quote-list">
                {quotes && quotes.map((quote, index) => (
                    <li key={index} className="bg-main" id="list">{quote}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    quotes: state.quotes,
}); 

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine)