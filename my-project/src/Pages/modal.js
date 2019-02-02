import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
class Modal1 extends Component {
    render() {
      
  
      return (
        <div>
        <Button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </Button>
        <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
          
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <Button type="button" className="close" data-dismiss="modal">&times;</Button>
            </div>
            
            <div className="modal-body">
              Modal body..
            </div>
            
            <div className="modal-footer">
              <Button type="button" className="btn btn-danger" data-dismiss="modal">Close</Button>
            </div>
            
          </div>
        </div>
      </div>
        </div>
      );
    }
  }

  export default Modal1;