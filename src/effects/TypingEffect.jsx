import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = ({sequence}) => {
    return <TypeAnimation sequence={sequence} cursor={true} speed={83} />;
}

export default TypingEffect
