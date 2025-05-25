// Styles
import {
  ContainerCards,
  BoxCards,
  CardsItems,
  Card,
  CardLink,
  CardContent,
  CardImage,
  Image,
  CardParagraph,
  CardButton,
} from "./styled";

// Colors
import * as Colors from "../../config/colors";

//Icons
import { IoIosArrowForward } from "react-icons/io";

// Helpers
import { liProducts } from "../../helpers/data";

export default function CardsProducts() {
  return (
    <ContainerCards>
      <BoxCards>
        <CardsItems>
          {liProducts.map(({ id, text, img, alt, link }) => {
            const CardLinkBg =
              id === 0 ? Colors.primaryColorLight : Colors.textPrimary;

            const CardButtonBg =
              id === 0 ? Colors.textPrimary : Colors.primaryColorLight;

            const CardTextColor =
              id === 0 ? Colors.textPrimary : Colors.primaryColorLight;
            return (
              <Card key={id}>
                <CardLink to={`/${link}`} $bgCard={CardLinkBg}>
                  <CardContent>
                    <CardParagraph $textColor={CardTextColor}>
                      {text}
                    </CardParagraph>
                    <CardImage>
                      <Image src={img} alt={alt} />
                    </CardImage>
                    <CardButton $bgButton={CardButtonBg}>
                      Ver opções <IoIosArrowForward />
                    </CardButton>
                  </CardContent>
                </CardLink>
              </Card>
            );
          })}
        </CardsItems>
      </BoxCards>
    </ContainerCards>
  );
}
