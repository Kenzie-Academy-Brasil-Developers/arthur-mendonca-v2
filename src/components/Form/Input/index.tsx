import { iInputProps } from '../../../contexts/userContext/@types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

const Input = ({ label, errors, register, type }: iInputProps) => (
  <fieldset>
    <StyledTextField type={type} label={label} {...register} />
    {errors && <StyledParagraph fontColor='red'>{errors}</StyledParagraph>}
  </fieldset>
);

export default Input;
