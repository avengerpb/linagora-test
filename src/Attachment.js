import React, {Component} from 'react';
import File from "./File.js"

class Attachment extends Component {
  constructor(props) {
    super(props);
  }

  getFiles(){
    fetch ('http://localhost:3000/getfiles') //Getting the list of file (Pseudo link)
    .then(response => response.json()) //
    .then(response => {
      this.setState({'files': [response]}) //Store in state of this component
    })
    .catch(e => e);
  }

  render() {
    return (
      {this.state.files.map((post, index) => {
          return <File key={index} data={post} /> //Mapping data in array to iterate rendering data in child component
            //Code in File.js
      })}
    );
  }
}

export default Attachment;
