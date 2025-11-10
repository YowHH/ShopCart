"use client"

import React, { useEffect, useState } from 'react'
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data';
import { client } from '@/sanity/lib/client';

const ProductGrid = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

    useEffect(() => {
        const query = `*[_type == "product" && variant == $variant] | order(name desc){
            ...,"categories":categories[]->title
        }`;
        const params = { variant: selectedTab.toLowerCase() };

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await client.fetch(query, params);
                setProduct(response)
            } catch (error) {
                console.error("Product fetching error:",error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [selectedTab])
    return (
        <div>
            <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
            {loading ? <div className=''>

            </div> : <>products</>}
        </div>
        
    )
}

export default ProductGrid