import React, { Component } from 'react';
import Swal from 'sweetalert2';
import SweetAlert from 'sweetalert2-react';
import { Button } from 'mdbreact';


class BasicPopup extends Component {
  
  constructor(props) {
  	super(props)
  	this.state = {
  		show:false
  	}
  }

  render() {
    const {show, btnText} = this.state;
    return (
      <div className="BasicPopup">
		<Button color={this.props.btnColor} onClick={() => this.setState({ show: true })}>{this.props.btnText}</Button>
		<SweetAlert
			show={this.state.show}
			title={this.props.title}
			text={this.props.text}
			confirmButtonText="Huzzah!"
			onConfirm={() => this.setState({ show: false })}
		/>
      </div>
    );
  }
}

export default BasicPopup;