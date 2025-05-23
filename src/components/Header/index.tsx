// Styled Components
import { Nav, ListLinks, BoxLogo } from "./styled";

// Components
// import CustomLink from "../Link";
import CustomImage from "../Image";
import CustomButton from "../Button";

// Context
import { useMenuToggle } from "../../hook/useMenuToggle";

// Redux
// import * as Actions from "../../store/modules/auth/actions";

// Redux
// import { useSelector, useDispatch } from "react-redux";

// React Router
import { useNavigate } from "react-router-dom";

// Toastify
// import { toast } from "react-toastify";

// Icons
import { IoIosMore } from "react-icons/io";

// Helpers
// import { liValues } from "../../helpers/data";

// // Types
// interface RootState {
//   auth: {
//     isLoggedIn: boolean;
//   };
// }

export default function Header() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, openMenu } = useMenuToggle();

  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleBackToHome = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    navigate("/");
  };

  const handleMenuToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isOpen) return;
    openMenu();
  };

  // const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   e.preventDefault();

  //   toast.info("Você saiu do sistema.");
  //   dispatch(Actions.ButtonLoginClickFailure());
  //   navigate("/");
  // };
  return (
    <Nav>
      <BoxLogo>
        <CustomButton width="40px" height="40px" onClick={handleBackToHome}>
          <CustomImage
            src="/atomo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            loading="lazy"
          />
        </CustomButton>
      </BoxLogo>

      <ListLinks>
        <CustomButton bg onClick={handleMenuToggle}>
          <IoIosMore size={18} color="#fff" />
        </CustomButton>
      </ListLinks>
    </Nav>
  );
}
