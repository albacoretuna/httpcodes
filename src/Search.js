import React from 'react';
const codes = [
  "421: Unprocessable input",
  "201: Created",
  "301: Moved Permanently",
  "303: See other",
  "202: accepted",
  "200: ok",
  "429: Too many requests",
  "400: bad request",
  "401: Unauthorized",
  "403: Forbidden",
  "404: not Found",
  "405: Method Not Allowed",
  "406: Header not acceptable",
  "415: Unsupported Media type",
  "409: conflict, request incompatible with a previous request",
  "422: unprocessable Entity, the body is well-formed and still invalid",
  "503: Service unavailable, user should retry later",
  "502: Bad gateway, there's a problem with another server",
  "501: Not implemented, I feel like I should have handled this",
  "500: Internal server error"
              ].sort();
const SearchBox = React.createClass({
    getInitialState() {
        return {
            codes :  codes,
            searchTerm: ' '
        };
    },
    handleSearchChange(event) {
        this.setState({searchTerm:event.target.value});
    },
    render() {

        let codes = this.state.codes;
        let searchTerm = this.state.searchTerm.trim().toLowerCase();
        if(searchTerm.length >= 1 ) {
            codes = codes.filter((handle) => {
                handle = handle || '@';
                return handle.toLowerCase().match(searchTerm); });
        }
        return (
            <div>
              <input className="search-input" type="text" placeholder="Type here to filter status codes" onChange={this.handleSearchChange}/>
                <div className="twelve columns search-container">
                    <ul className="search-container-list">
                        {codes.map((code) =>  {
                            return (
                                <li key={code}>
                                  {code}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
});
export default SearchBox;