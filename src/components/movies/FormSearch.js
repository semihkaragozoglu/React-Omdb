import React, { useState } from 'react';   
 
class FormSearch extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      y: "",
      s: "batman",
      type: "",
      page: "1"
    }  
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
}
  componentDidMount() { 
    this.props.searchEvent(this.state)
  }
  submit(e){
      e.preventDefault();
    this.props.searchEvent(this.state)
  }
 
  render() { 
    const{y, s, type, page} = this.state;
    return (
      <div>
          <form onSubmit={this.submit}> 
                            <label>
                                Title:
                            </label>
                                <input
                                    id="s"
                                    type="text"
                                    name="s"
                                    value={s}
                                    autoComplete="off" 
                                    onChange={this.handleChange}
                                    />
                            <label>Year:</label>
                            <input
                                    max="2020"
                                    min="1900"
                                    id="y"
                                    name="y"
                                    type="number"
                                    value={y}
                                    autoComplete="off" 
                                    onChange={this.handleChange}
                                    /> 
                            <label>Type:</label>
                            <select name="type" value={type} onChange={this.handleChange}>
                                <option value="">All</option>
                                <option value="movie">Movies</option>
                                <option value="series">Series</option>
                                <option value="episode">Episodes</option>
                            </select> 
                            <label>Page:</label>
                            <select name="page" value={page} onChange={this.handleChange}> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            <button type="submit">Search</button> 
          </form>
    </div>
    );
  }
}
  
export default FormSearch;