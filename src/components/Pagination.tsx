interface IProps {
  next(e: React.MouseEvent): any;
  previous(e: React.MouseEvent): any;
}

const Pagination = (props: IProps) => {
  return (
    <div className="pagination">
      <button onClick={(e) => props.previous(e)}>BACK</button>
      <button onClick={(e) => props.next(e)}>NEXT</button>
    </div>
  );
};

export default Pagination;
