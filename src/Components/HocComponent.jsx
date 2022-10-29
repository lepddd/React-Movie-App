import Hoc from "./Hoc";
const HocComponent = ({ datas }) => {
  console.log(datas);
  return datas.map((data) => <p key={data.id}>{data.title}</p>);
};
const HOC = Hoc(HocComponent);
export default HOC;
/*  */
