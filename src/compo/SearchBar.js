import React from "react";
import './SearchBar.css';
import GitHubButton from 'react-github-btn';

class SearchBar extends React.Component {

    state = {term: ""};

    onChangeEvent = (e) => {
        this.setState({term: e.target.value});
    }

    onSubmitEvent = (e) => {
        e.preventDefault();
        this.props.onSearchProp(this.state.term);
    }

    render() {
        return (
            <div className="ui padded red segment">
                <div className="ui bottom left attached label">Developer Fatih Şennik <a
                    href="mailto:info@fatihsennik.com">info@fatihsennik.com</a></div>
                <form onSubmit={this.onSubmitEvent} className="ui fluid form">
                    <div className="inline fields">
                        <div className="thirteen wide field">
                            <div className={`ui icon input ${this.props.loading}`}>
                                <input type="text" placeholder="Search Youtube Video. Type Hit Enter :) "
                                       value={this.state.term}
                                       onChange={this.onChangeEvent}
                                />
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="five wide field">
                            <GitHubButton data-icon="octicon-star" data-size="large" data-show-count="true"
                                          href="https://github.com/senniksoft/react-youtube-video-search">Giving
                                Star
                                helps your brother :)
                            </GitHubButton>
                        </div>
                    </div>
                </form>
            </div>

        );
    }


}


export default SearchBar