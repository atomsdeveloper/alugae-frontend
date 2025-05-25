import React from "react";

// Styled Components
import { Section, ListLinks, BoxLogo, HeaderMenu, Overlay } from "./styled";

// Colors
import * as Colors from "../../config/colors";

// Components
import CustomImage from "../Image";
import CustomButton from "../Button";

// Context
import { useMenuToggle } from "../../hook/useMenuToggle";

// Redux
import * as Actions from "../../store/modules/auth/actions";

// Redux
import { useSelector, useDispatch } from "react-redux";

// React Router
import { useNavigate } from "react-router-dom";

// Toastify
import { toast } from "react-toastify";

// Icons
import { IoIosClose } from "react-icons/io";

// Helpers
import { liValues } from "../../helpers/data";
import Paragraph from "../Paragraph";

// Types
interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

export default function Menu() {
  const dispatch = useDispatch();
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

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (!visible) return null;

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

  const handleNavigationPage = (link: string) => {
    if (!isOpen) return;
    closeMenu();
    navigate(`/${link}`);
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    toast.info("Você saiu do sistema.");
    dispatch(Actions.ButtonLoginClickFailure());
    navigate("/");
  };
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <Section $isClosing={isClosing}>
            <HeaderMenu>
              <BoxLogo>
                <CustomButton
                  width="40px"
                  height="40px"
                  onClick={handleBackToHome}
                >
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
              {!isLoggedIn ? (
                liValues.map(({ id, link, text, bg }) => {
                  const color =
                    id > 0 ? Colors.primaryColorLight : Colors.textPrimary;

                  return (
                    <CustomButton
                      key={id}
                      rel="noopener noreferrer"
                      bg={bg}
                      width="100%"
                      border={Colors.borderRadiusMd}
                      height="4.6rem"
                      onClick={() => handleNavigationPage(link)}
                    >
                      <Paragraph colors={color}> {text}</Paragraph>
                    </CustomButton>
                  );
                })
              ) : (
                <CustomButton
                  rel="noopener noreferrer"
                  width="100%"
                  height="4.6rem"
                  onClick={handleLogout}
                >
                  <Paragraph bg> Sair </Paragraph>
                </CustomButton>
              )}
            </ListLinks>
          </Section>
        </>
      )}
    </>
  );
}
