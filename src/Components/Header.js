import {
    Badge,
    Container,
    Dropdown,
    FormControl,
    Navbar,
    Nav,
    Button
} from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { CartState } from "../Context/Context"

const Header = () => {


    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState()

    return (
        <Navbar bg='dark' variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='search a product'
                        className="m-auto"
                        onChange={(e) =>
                            productDispatch({
                                type: 'Filter_BY_SEARCH',
                                payload: e.target.value,
                            })
                        }
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align='center' title={`Drop down`} >
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize='15px' />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>

                            {cart.length > 0 ? (
                                <>
                                    {cart.map((product) => (
                                        <span className="cartitem" key={product.id}>
                                            <img
                                                src={product.image}
                                                className='cartItemImage'
                                                alt={product.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{product.name}</span>
                                                <span>${product.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize='20px'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: product,
                                                    })
                                                }}
                                            />
                                        </span>
                                    ))}
                                    <Link to='/cart'>
                                        <Button style={{ width: "95%", margin: "0, 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}


                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header
