import React from 'react';

import {Container, Content, DropBoxLogo, Header, HeaderWhapper} from './styles'

interface Props {
    variant: 'blue' | 'beige' | 'white' | 'black';
    title: string;
    description: string;
}

const Section: React.FC<Props> = ({variant, title, description}) => {
    return <Container className={variant}>
        <HeaderWhapper>
            <Header>
                <h1>
                    <DropBoxLogo/>
                    <span>DropBox</span>
                </h1>
                <button>Interagir</button>
            </Header>
        </HeaderWhapper>

        <Content>
            <h2>{title}</h2>
            <p>{description}</p>
        </Content>
    </Container>
}
export default Section;
