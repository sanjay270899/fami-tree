import React from 'react';
import '../../assets/style/Container.css';
import Box from '../Box';

function Container(props) {

    return (
        <div className="Container" >
            {
                !props.root &&
                <div className="Container-line">
                    <div className={`Container-line-left${props.first ? '' : '-u'}`}></div>
                    <div className={`Container-line-right${props.last ? '-l' : '-u-l'}`}></div>
                </div>
            }
            <div className="Container-body">
                <Box data={props.data} />
            </div>
            {
                props.data.children.length > 0 &&
                <div className="Container-line">
                    <div className="Container-line-left-r"></div>
                    <div className="Container-line-right"></div>
                </div>
            }
            <div className="Container-children">
                {
                    props.data.children.map((child, index) => (
                        <Container data={child} first={index === 0} last={index === props.data.children.length - 1} />
                    ))
                }
            </div>
        </div>
    )
}

export default Container
