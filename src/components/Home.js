import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>Home
            <div>
                <Link to='produto/primeiroProduto'>Primeiro Produto</Link> |
                <Link to='produto/segundoProduto'>Segundo Produto</Link>
            </div>
        </div>
    )
}
