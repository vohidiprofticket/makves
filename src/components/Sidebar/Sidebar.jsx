import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            activeRoute:"/"
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path) => {
        this.setState((state) => ({ activeRoute:path }));
        this.setState((state) => console.log(state))
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const { activeRoute }=this.state
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={containerClassnames}>
                <div className="nav">
                    <div className="nav-menu">
                        <div className='logo'>
                            <img
                                src={logo}
                                alt="TensorFlow logo"
                                className='image-responsive'
                            />
                            <span className='logo-title'>TensorFlow</span>
                            <button
                                onClick={this.toggleSidebar}
                                className='button-wrapper'
                            >
                                <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                            </button>
                        </div>

                        <div className='menu-list'>
                            {
                                routes.map((route) => (
                                    <div
                                        className={route.path===activeRoute ? "menu-item wrapper-item active" : "menu-item wrapper-item" }
                                        key={route.title}
                                        onClick={() => this.goToRoute(route.path)}
                                    >
                                        <FontAwesomeIcon icon={route.icon} />
                                        <span>{route.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nav-footer">
                        <div className='support'>
                            {
                                bottomRoutes.map((route) => (
                                    <div
                                        className='support-item wrapper-item'
                                        key={route.title}
                                        onClick={() => this.goToRoute(route.path)}
                                    >
                                        <FontAwesomeIcon icon={route.icon} />
                                        <span>{route.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}
