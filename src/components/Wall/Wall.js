require('components/obj/obj.css');

import React from 'react';
import Plain from '../plain/Plain';
import { BROAD_CELL_SIZE } from '../../constants';

const background = 'url(src/components/wall/wall.jpg) 50% 50%/200px 200px';

// no support for rotated walls for now
export default ({ coords2d, pos, size, isVisible = true, playerPos, getTransformRule, getSpotLightBackground }) => {
    const styleRules = Object.assign(getTransformRule({ pos }), {
        display: isVisible ? 'block' : 'none'
    });

    // Front-Back-Left-Right
    return <div className="wall obj" style={styleRules}>
        <Plain
            pos={[0, -size[1] / 2, size[2] / 2]}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getSpotLightBackground(
                [playerPos[0] - coords2d[0][0], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[2] - coords2d[2][1]))
            ) + ', ' + background : 'none'}
        />
        <Plain
            pos={[0, -size[1] / 2, -size[2] / 2]}
            size={size}
            angle={[0, 0, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getSpotLightBackground(
                [playerPos[0] - coords2d[0][0], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[2] - coords2d[0][1]))
            ) + ', ' + background : 'none'}
        />
        <Plain
            pos={[-size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getSpotLightBackground(
                [playerPos[2] - coords2d[0][1], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[0] - coords2d[0][0]))
            ) + ', ' + background : 'none'}
        />
        <Plain
            pos={[size[0] / 2, -size[1] / 2, 0]}
            size={[size[2], size[1]]}
            angle={[0, -90, 0]}
            getTransformRule={getTransformRule}
            background={isVisible ? getSpotLightBackground(
                [playerPos[2] - coords2d[0][1], playerPos[1]],
                Math.max(0, BROAD_CELL_SIZE - Math.abs(playerPos[0] - coords2d[1][0]))
            ) + ', ' + background : 'none'}
        />
    </div>;
}