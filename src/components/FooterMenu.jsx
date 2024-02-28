import { Link } from "react-router-dom";

export const FooterMenu = (props) => {
  const { footerData = {} } = props;
  const { heading, menuList = [] } = footerData;

  return (
    <div className="ft-box ft-menu-outer">
      <h6 className="ftb-title text-white">{heading}</h6>
      <ul className="ftb-menus">
        {menuList.length > 0 &&
          menuList.map((item, index) => {
            return (
              <li key={item.title + index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
