import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CocktailCard = ({ cocktail }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/cocktail/${cocktail.idDrink}`);
    };

    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img 
                variant="top" 
                src={`${cocktail.strDrinkThumb}/preview`} 
                alt={cocktail.strDrink} 
            />
            <Card.Body>
                <Card.Title>{cocktail.strDrink}</Card.Title>
                <Button variant="primary" onClick={handleViewDetails}>
                    Ver descripción
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CocktailCard;
