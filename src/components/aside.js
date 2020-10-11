import React, { Component } from 'react'

export default class Aside extends Component {
    render(){
        return (
            <aside onclick = "" className = 'menu'>
                <a onclick = "" rel = 'noopener noreferrer' href = 'https://github.com/michaelchapa' target ='blank'>GitHub</a>
                <a onclick = "" rel = 'noopener noreferrer' href = 'https://linkedin.com/in/michaelchapa1' target = '_blank'>LinkedIn</a>
                <a onclick = "" rel = 'noopener noreferrer' href = 'https://soundcloud.com/groove-bodega' target = '_blank'>Groove Bodega</a>
                <a onclick = "" rel = 'noopener noreferrer' href = 'https://soundcloud.com/4d69636861656c' target = '_blank'>4d69636861656c</a>
            </aside>
        );
    }
}