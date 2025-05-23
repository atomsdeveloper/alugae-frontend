import React from "react";

// Styled Components
import { Section, ListLinks, BoxLogo, HeaderMenu, Overlay } from "./styled";

// Components
import CustomLink from "../Link";
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
import { IoIosClose } from "react-icons/io";

// Helpers
import { liValues } from "../../helpers/data";

// // Types
// interface RootState {
//   auth: {
//     isLoggedIn: boolean;
//   };
// }

export default function Menu() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, closeMenu } = useMenuToggle();
  const [visible, setVisible] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setIsClosing(false);
    } else if (visible) {
      setIsClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300); // match da duração da animação
      return () => clearTimeout(timeout);
    }
  }, [isOpen, visible]);

  if (!visible) return null;

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

    if (!isOpen) return;
    closeMenu();
  };

  // const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   e.preventDefault();

  //   toast.info("Você saiu do sistema.");
  //   dispatch(Actions.ButtonLoginClickFailure());
  //   navigate("/");
  // };
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <Section $isClosing={isClosing}>
            <HeaderMenu>
              <BoxLogo>
                <CustomButton onClick={handleBackToHome}>
                  <CustomImage
                    src="/atomo.png"
                    alt="Logo da empresa"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </CustomButton>
              </BoxLogo>

              <CustomButton bg onClick={handleMenuToggle}>
                <IoIosClose size={18} color="#fff" />
              </CustomButton>
            </HeaderMenu>

            <ListLinks>
              <>
                {liValues.map(({ id, link, text, icon: Icon }) => (
                  <CustomLink
                    key={id}
                    to={`/${link}`}
                    rel="noopener noreferrer"
                  >
                    <CustomButton>
                      <Icon size={18} color="#fff" />
                      <p>{text}</p>
                    </CustomButton>
                  </CustomLink>
                ))}
              </>
            </ListLinks>
          </Section>
        </>
      )}
    </>
  );
}
