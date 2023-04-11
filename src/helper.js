import S7Image from './img/S7Image.png';
import XiamenAirImage from './img/XiamenAir.png';
const getCompanies = () =>{
  return [
    {
      id:"qwerty-s7",
      logo:S7Image,
      name:"S7",
    },
    {
      id:"qwerty-XiamenAir",
      logo:XiamenAirImage,
      name:"XiamenAir",
    }
  ]

}
const getCompany = (id) =>{
  return getCompanies().find((elm) => elm.id == id);
}
export {getCompanies, getCompany};