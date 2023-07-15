import { Box, Container } from "@material-ui/core";
import FeaturedProduct from "../../components/products/FeaturedProduct";
import CarouselBanner from "../../components/Carousel";

function Home(props) {
  return (
    <>
      <CarouselBanner />
      <Box>
        <Container>
          <FeaturedProduct />
        </Container>
      </Box>
    </>
  );
}

export default Home;
