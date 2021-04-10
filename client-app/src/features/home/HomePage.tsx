import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

export default function HomePage() {
    return(
        <Container style={{marginTop: '7em'}}>
            <h1>Home Page</h1>
            <h3>Go to <Link to='/activities'>Activities</Link></h3>
        </Container>
    )
}