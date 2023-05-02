import './Button.css';

const Button = ({ handlerClick }) => {
  return (
    <>
        <button className='Button__container' onClick={handlerClick}>
            <p>See another</p>
        </button>
    </>
  )
};

export default Button;