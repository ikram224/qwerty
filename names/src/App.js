import React from "react";

class Plice extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {value : "привет мир!"}
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    getRawMarkup() {
        const md = new Remarkable()
        return {__html: md.render(this.state.value)}
    }
    render() {
        return (
            <div className="Plice">
                <h3>входные данные</h3>
                <label htmlFor="markdown-content">
                    ведите что то в форме Plice
                </label>
                <textarea id="markdown-content"
                          onChange={this.handleChange}
                          defaultValue={this.state.value}/>
                <h3>вывод</h3>
                <div className="content"
                     dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        )
    }
}



export default Plice;
