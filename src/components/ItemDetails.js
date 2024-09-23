import Amplify from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(); // Replace with your API Gateway endpoint
                setItem(response.data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItemDetails();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;
