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
            return (
              <Card key={id}>
                <CardLink to={`/${link}`}>
                  <CardContent>
                    <CardParagraph>{text}</CardParagraph>
                    <CardImage>
                      <Image src={img} alt={alt} />
                    </CardImage>
                    <CardButton>
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
