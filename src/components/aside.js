import React, { Component } from 'react'

export default class Aside extends Component {
    render(){
        return (
            <aside className = 'menu'>
                <a id = 'nav1' rel = 'noopener noreferrer' href = 'https://github.com/michaelchapa' target ='blank'>GitHub</a>
                <a id = 'nav2' rel = 'noopener noreferrer' href = 'https://linkedin.com/in/michaelchapa1' target = '_blank'>LinkedIn</a>
                <a id = 'nav3' rel = 'noopener noreferrer' href = 'https://michaelchapa.github.io/otherNews' target = '_blank'>Read otherNews</a>
                <a id = 'nav4' rel = 'noopener noreferrer' href = 'https://soundcloud.com/4d69636861656c' target = '_blank'>4d69636861656c</a>
            </aside>
        );
    }
}