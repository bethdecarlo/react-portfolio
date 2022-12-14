import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Beth DeCarlo 2022</li>
              <li> Built with <a title="react" href="https://reactjs.org/"> React </a></li>
           </ul>

        </div>
        {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i class="fa-solid fa-chevron-up"></i></a></div> */}
     </div>
  </footer>
    );
  }
}

export default Footer;
