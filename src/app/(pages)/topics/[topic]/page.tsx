import { UnsplashImage } from "@/app/utils/unsplashImage";
import { AspectRatio, Box, Card, Container, Sheet, Typography,Grid } from "@mui/joy";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

//? setting meta data

export const metadata = {
    title: "Filtered Image Page"
}

 interface PageProps  {
    params: {topic : string},
}

// export const revalidate = 0;

const Page = async ({params: {topic}} : PageProps) => {
    try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${topic}&count=12client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    

    const images: UnsplashImage[] = await response.json();

    console.log(images);

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }} >
            
            <Grid container spacing={2} sx={{ flexGrow: 1 }} >
                
                    {
                    images.map((image) => (
                        <Grid  md={4} xs={6} key={image.urls.raw} >
                            <Card variant="soft">
                                <AspectRatio>
                                    <Image width={255} height={255} alt={image.alt_description} src={image.urls.raw} key={image.links.self} />
                                </AspectRatio>
                            </Card>
                        </Grid>
                        ))
                    }
            </Grid>


            {/* <Box sx={{ width: "100%", height: "100%", overflowY: 'none' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {images.map((image) => (
                    <ImageListItem key={image.urls.raw}>
                        <Image fill alt={image.alt_description} src={image.urls.raw} key={image.urls.raw} />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box> */}
        </Container>
    )
        
         } catch (error) {
    console.error('Error fetching images:', error);
    return (
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Typography level="title-lg" color="danger">
          Error fetching images. Please check your API request and try again.
        </Typography>
      </Container>
    );
  }
}

export default Page;