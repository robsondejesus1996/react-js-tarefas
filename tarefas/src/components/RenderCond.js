const RenderCond = ({x}) => {
  return (
    <div>

      {x > 5 && <p>X é maior que 10</p>}
      {x > 5 ? <p>X é um numero alto</p> : <p>X é um numero baixo</p>}
      
    </div>
  );
};

export default RenderCond;
