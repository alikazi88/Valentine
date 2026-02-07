import React, { useMemo, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { ParallaxBarrierEffect } from 'three/examples/jsm/effects/ParallaxBarrierEffect.js';

const ParallaxEffect = () => {
    const { gl, scene, camera, size } = useThree();

    const effect = useMemo(() => {
        const pEffect = new ParallaxBarrierEffect(gl);
        return pEffect;
    }, [gl]);

    useEffect(() => {
        effect.setSize(size.width, size.height);
    }, [effect, size]);

    useFrame((state) => {
        // The example uses effect.render( scene, camera );
        // We disable autoClear to let the effect handle the multi-pass rendering
        state.gl.autoClear = false;
        effect.render(scene, camera);
    }, 1);

    return null;
};

export default ParallaxEffect;
