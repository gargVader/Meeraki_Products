import React from 'react'
import Products from '../data'
import ProductsJSON from '../data.json'
import ProductCard from '../ProductCard'

function Silicones() {
    return (
        <div className="products" style={{ margin: 60 + 'px' }}>
            <div>
                {/* keys = ProductsJSON.keys(); */}

                {/* {keys.map((key) => (
                    <div>
                        if (key=="Silicones") {
                            <ProductCard
                            productName={ProductsJSON[key].productName}
                            productDescription={ProductsJSON[key].productDescription}
                            productShortDescription ={ProductsJSON[key].productShortDescription}
                        />
                        }
                    </div>
                ))} */}

                {Products.map((product, index) => (

                    <div>
                        <div key={index}>
                            <ProductCard
                                productName={product.productName}
                                productDescription={product.productDescription}
                                productShortDescription={product.productShortDescription}
                            />
                        </div>
                    </div>

                ))}
            </div>

        </div>

    )
}

export default Silicones;
