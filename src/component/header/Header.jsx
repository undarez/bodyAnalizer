import React from 'react';
import './_header.scss';

const Header = () => {
      return (
            <header>
                  <div className="container-text_header">
                        <h1>BodyAnalizer</h1>
                        <p>
                              BodyAnalyzer vous permet de fixer des objectifs{' '}
                              <br /> personnalisés et de suivre vos progrès en
                              temps réel.
                        </p>
                  </div>
            </header>
      );
};

export default Header;
