import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCocktailDetails } from '../services/api';
import { Container, Button } from 'react-bootstrap';

const CocktailDetailsPage = () => {
    const { id } = useParams(); // Obtenemos el ID del cóctel de la URL
    const navigate = useNavigate(); // Para regresar a la página principal
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const fetchCocktail = async () => {
            const data = await getCocktailDetails(id);
            setCocktail(data);
        };
        fetchCocktail();
    }, [id]);

    if (!cocktail) {
        return <p>Cargando...</p>;
    }

    return (
        <Container style={{ marginTop: '2rem' }}>
            <Button variant="secondary" onClick={() => navigate('/')}>
                ← Regresar
            </Button>
            <h1 className="mt-4">{cocktail.strDrink}</h1>
            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', marginTop: '1rem' }}
            />
            <h5 className="mt-4">Descripción</h5>
            <p>{cocktail.strInstructions}</p>
            <h5>Ingredientes</h5>
            <ul>
                {Object.keys(cocktail)
                    .filter((key) => key.startsWith('strIngredient') && cocktail[key])
                    .map((key) => (
                        <li key={key}>{cocktail[key]}</li>
                    ))}
            </ul>
        </Container>
    );
};

export default CocktailDetailsPage;
