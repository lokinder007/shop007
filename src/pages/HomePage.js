import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import { shopproducts } from '../shop007 products';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function HomePage() {

    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const {cartItems} = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    // async function addData() {
    //     try {
    //         await addDoc(collection(fireDB, "users"), { name: "Lokinder", age: 35 })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function getData() {
    //     try {
    //         const users = await getDocs(collection(fireDB, "users"), { name: "Lokinder", age: 35 })

    //         const usersArray = [];

    //         users.forEach((doc) => {
    //             const obj = {
    //                 id: doc.id,
    //                 ...doc.data()
    //             }
    //             usersArray.push(obj)
    //         });

    //         console.log(usersArray);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    //  function addProductsData() {
    //    shopproducts.map(async(product) => {
    //     try {
    //         await addDoc(collection(fireDB, "products"), product)
    //     } catch (error) {
    //         console.log(error)
    //     } 
    // })
    // }

    async function getData() {
        try {
            setLoading(true)
            const users = await getDocs(collection(fireDB, "products"))

            const productsArray = [];

            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                productsArray.push(obj)
                setLoading(false)
            });

            // console.log(productsArray);
            setProducts(productsArray);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
         dispatch({type:'ADD_TO_CART' , payload: product })
    }

    return (
        <Layout loading={loading}>

            {/* <button onClick={addData}>Add Data</button> */}
            {/* <button onClick={getData}>Get Data</button> */}
            {/* <button onClick={addProductsData}>Add Products Data</button> */}

            <div className="container">
                <div className="row">
                    {products.map((product) => {

                        return <div className="col-md-4">
                            <div className="m-2 p-1 product position-relative">

                                <div className="product-content">
                                    <p>{product.name}</p>
                                    <div className="text-center">
                                        <img src={product.imageURL} alt="" className='product-img' />
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <h2>{product.price} RS/-</h2>
                                    <div className="d-flex">
                                        <button className='mx-2' onClick={()=> addToCart(product)}>ADD TO CART</button>
                                        <button onClick={()=>{
                                            navigate(`/productinfo/${product.id}`)
                                        }}>VIEW</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
            </div>

        </Layout>
    )
}

export default HomePage
