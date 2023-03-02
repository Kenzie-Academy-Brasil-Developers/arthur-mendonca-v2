import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../contexts/cartContext';

const CartProductCard = () => {
  const { cartItens, setCartItens, buyValue, setBuyValue } =
    useContext(CartContext);

  function deleteProduct(id: number): void {
    const filtered = cartItens.filter((food) => food.id !== id);
    const deleted = cartItens.find((food) => food.id === id);
    setCartItens(filtered);
    setBuyValue(buyValue - deleted!?.price);
    // console.log(buyValue);
  }

  return cartItens.map((food) => (
    <StyledCartProductCard key={food.id}>
      <div className='imageBox'>
        <img src={food.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {food.name}
        </StyledTitle>
        <button
          type='button'
          onClick={(event) => deleteProduct(+event.currentTarget.id)}
          aria-label='Remover'
          id={food.id.toString()}
        >
          <MdDelete size={26} />
        </button>
      </div>
    </StyledCartProductCard>
  ));
};

export default CartProductCard;
