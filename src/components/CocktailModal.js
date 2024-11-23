import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CocktailModal = ({ show, cocktail, onClose }) => (
    <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{cocktail?.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                src={cocktail?.strDrinkThumb}
                alt={cocktail?.strDrink}
                style={{ width: '100%', marginBottom: '1rem', borderRadius: '10px' }}
            />
            <h5>Descripción</h5>
            <p>{cocktail?.strInstructions}</p>
            <h5>Ingredientes</h5>
            <ul>
                {Object.keys(cocktail)
                    .filter((key) => key.startsWith('strIngredient') && cocktail[key])
                    .map((key) => (
                        <li key={key}>{cocktail[key]}</li>
                    ))}
            </ul>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
);

export default CocktailModal;
