import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { CartContext } from '../../contexts/cartContext';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const { setOpenModal, cartItens } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => setOpenModal(false)}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          <CartProductList />
          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              {cartItens.length === 0 && <p>Sua sacola está vazia</p>}
            </StyledTitle>
            <StyledParagraph textAlign='center'>
              {cartItens.length === 0 && <span> Adicione itens </span>}
            </StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
