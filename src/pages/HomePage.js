import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CocktailCard from '../components/CocktailCard';
import { getCocktailsByLetter } from '../services/api';

const HomePage = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            const drinks = await getCocktailsByLetter('a'); // Obtener cócteles que empiezan con 'a'
            setCocktails(drinks.slice(0, 15)); // Limitamos a 15 cócteles
        };
        fetchCocktails();
    }, []);

    return (
        <Container>
            <Row>
                {cocktails.map((cocktail) => (
                    <Col key={cocktail.idDrink} md={4}>
                        <CocktailCard cocktail={cocktail} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
