import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Product from '../../assets/Product'
import Card from '../commonfiles/Card'

const Search = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const categoryQuery = searchParams.get('category')?.toLowerCase() || '';
    const [result, setResult] = useState([])
    useEffect(() => {
        const filterd = Product.filter((item) =>
            item.category.toLowerCase() === categoryQuery
        )
        if (filterd.length === 0) {
            navigate('/')
        }
        else {
            setResult(filterd)
        }

    }, [categoryQuery, navigate])
    return (
        <div>
            <div className='new_colloection'>
                <h1> search Results for '{categoryQuery}'</h1>
                <hr />
                <div className='collections'>
                    {result.map((card) => {
                        return <Card key={card.id} id={card.id} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price} />


                    })}


                </div>

            </div>
        </div>
    )
}

export default Search