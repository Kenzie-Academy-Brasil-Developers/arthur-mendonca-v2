import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/cartContext';

const CartProductList = () => {
  const { buyValue, setBuyValue, setCartItens } = useContext(CartContext);

  function removeAll(): void {
    setCartItens([]);
    setBuyValue(0);
  }

  return (
    <StyledCartProductList>
      <ul>{CartProductCard()}</ul>
      {/* Isto é um componente */}
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          <span>
            {buyValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => removeAll()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
