import React, {Component} from 'react';
const imageThumbnail = require('image-thumbnail'); // npm package from" https://www.npmjs.com/package/image-thumbnail
import ReactAudioPlayer from 'react-audio-player'; // npm package from" https://www.npmjs.com/package/react-audio-player
import ReactPlayer from 'react-player'; // npm package from" https://www.npmjs.com/package/react-player
import FileIcon from 'react-file-icon'; // npm package from" https://www.npmjs.com/package/react-file-icon
class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {

     const type = this.props.data.[src].split('.').pop(); //Getting file type from src from the state of parent component

    if (type === (('jpg') ||('png') || ('jpeg'))) //Image extention from supported list
      {
      const thumbnail = await imageThumbnail({ uri: this.props.data.src });
      representation = <img src={thumbnail} />
      download = <a href={this.props.data.src}> Download </a>
    }
    else if (type === ('mp3')) { //Audio extention from supported list
    representation  <ReactAudioPlayer src={this.props.data.src} autoPlay controls/>
    download = <a href={this.props.data.src}> Download </a>

    }
    else if (type === ('mp4')) { //Video extention from supported list
        representation =  <ReactPlayer url={this.props.data.src} playing />
        download = <a href={this.props.data.src}> Download </a>
    }
    else if (type === (('pdf') || ('docx'))){ //Document extention from supported list
      <FileIcon extension={type} />
      download = <a href={this.props.data.src}> Download </a>
    }
    else {
      download = <a>Unsupported file type</a>
    }

    return (
      <tbody>
            <tr>
              <td>Name</td> //Name of File
              <td>{this.props.data['name']}</td>
            </tr>
            <tr>
              <td>Representation</td>  //Representation of File
              <td>{representation}</td>
            </tr>
            <tr>
              <td>Size in bytes</td> //Size of File
              <td>{this.props.data['size']}</td>
            </tr>
            <tr>
              <td><button>Download</button></td>
              <td>{download}</td> //Download file from source
            </tr>
      </tbody>
    );
  }
}

export default File;
