interface IProps {
    img: string;
    title: string;
    text: string;
  }
  
  function ChooseBox({ img, title, text }: IProps) {
    return (
      <div className="choose-box">
        <i className={img}></i>
        <div className="choose-box__text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  
  export default ChooseBox;
  