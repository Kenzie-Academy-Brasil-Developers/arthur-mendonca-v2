import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../contexts/cartContext';

const ProductCard = () => {
  const {
    products,
    searchResult,
    cartItens,
    setCartItens,
    setBuyValue,
    buyValue,
  } = useContext(CartContext);

  function addFoodToCart(id: number): void {
    const foundFood = products.find((food) => food.id === id);
    const alreayAddedFood = !cartItens.find((food) => food.id === id);
    if (foundFood && alreayAddedFood) {
      setCartItens((prevItens) => [...prevItens, foundFood]);
      setBuyValue(buyValue + foundFood.price);
    }
    console.log(cartItens);
    console.log(buyValue);
  }
  return (
    <>
      {/* O products é uma promise da API, então, pra ele ser devidamente renderizado, eu posso usar uma renderização condicional ( && ) ou declarar que seu tipo é de início um array vazio. */}
      {searchResult.length !== 0
        ? searchResult.map((product: iSearchResult) => (
            <StyledProductCard key={product.id}>
              <div className='imageBox'>
                <img src={product.img} alt={product.name} />
              </div>
              <div className='content'>
                <StyledTitle tag='h3' $fontSize='three'>
                  {product.name}{' '}
                </StyledTitle>
                <StyledParagraph className='category'>
                  {product.category}{' '}
                </StyledParagraph>
                <StyledParagraph className='price'>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}{' '}
                </StyledParagraph>
                <StyledButton
                  onClick={(event) =>
                    addFoodToCart(Number(event.currentTarget.id))
                  }
                  $buttonSize='medium'
                  $buttonStyle='green'
                  id={product.id.toString()}
                >
                  Adicionar
                </StyledButton>
              </div>
            </StyledProductCard>
          ))
        : products.map((product: iProductsResponse) => (
            <StyledProductCard key={product.id}>
              <div className='imageBox'>
                <img src={product.img} alt={product.name} />
              </div>
              <div className='content'>
                <StyledTitle tag='h3' $fontSize='three'>
                  {product.name}{' '}
                </StyledTitle>
                <StyledParagraph className='category'>
                  {product.category}{' '}
                </StyledParagraph>
                <StyledParagraph className='price'>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}{' '}
                </StyledParagraph>
                <StyledButton
                  $buttonSize='medium'
                  $buttonStyle='green'
                  id={product.id.toString()}
                  onClick={(event) =>
                    addFoodToCart(Number(event.currentTarget.id))
                  }
                >
                  Adicionar
                </StyledButton>
              </div>
            </StyledProductCard>
          ))}
    </>
  );
};

export default ProductCard;
