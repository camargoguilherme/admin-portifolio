import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props)

    this.state = {...props.data}
  }
  render() {
    return (
      // <!-- Portfolio Modal 1 -->
      <div className="portfolio-modal modal fade" id={`${this.state.target}`} tabindex="-1" role="dialog" aria-labelledby={`${this.state.target}Label`} aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
