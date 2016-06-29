import React, { Component, PropTypes } from 'react'

import '../content/css/main.css'


class Nav extends Component {

    render(){

        return (
                <div style={{position: absolute, width: '100%' }}>
                    <header className="banner navbar navbar-default navbar-static-top" id="mainNav" role="banner">
                        <div className="container padding-top-15" style={{width: '98%'}}>
                            <div className="navbar-header">
                                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span>
                                    <span className="icon-bar"></span><span className="icon-bar"></span>
                                </button>
                                <div className="navbar-brand-container">
                                    <a className="navbar-brand menu-title" href="https://www.salesmachine.io/">
                                        <div className="logo"></div>
                                    </a>
                                </div>
                            </div>
                            <nav className="collapse navbar-collapse" role="navigation">
                                <ul className="nav navbar-nav" id="menu-main-navigation-menu">
                                    <li className="menu-product">
                                        <a href="/product.html">Product</a>
                                    </li>
                                    <li className="menu-pricing">
                                        <a href="/pricing.html">Pricing    </a>
                                    </li>
                                    <li className="menu-request-a-demo">
                                        <a href="https://calendly.com/salesmachine/demo/05-03-2016">Request a demo</a>
                                    </li>
                                    <li className="menu-login">
                                        <a href="http://my.salesmachine.io/auth/login">Login</a>
                                    </li>
                                    <li className="menu-sign-up">
                                        <a href="https://my.salesmachine.io/auth/register/sign_up">Sign up</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>


        )

    }

}

export default Nav