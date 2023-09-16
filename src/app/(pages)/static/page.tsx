import { AspectRatio, Box, Card, Container, Sheet, Typography } from "@mui/joy";
import Image from "next/image";

//? setting meta data

export const metadata = {
    title: "Static Page"
}

const Page = async () => {

    //? fetch an unspash image
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const image = await response.json(); 

    // console.log(image)

    // ? calculate the image aspect ratio
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <>
            <Container maxWidth="md" sx={{ mt: 5, textAlign:"center"}} >
                <Sheet variant="soft" sx={{borderRadius: 5, p: 2, m: 4}}  >
                    <Typography level="title-lg"  >
                        <strong> this page fetches and caches data at build time. </strong> Even though the unspalsh api resopondes with a new image on each request, we will always see the same image untill we compile th project again
                    </Typography>
                </Sheet>
                <Card  variant="soft" >
                    <AspectRatio  variant="outlined" ratio="1" objectFit="cover">
                        <Image width={width} height={height} alt={image.description} src={image.urls.raw} />
                    </AspectRatio>
                    <Box sx={{ display: "block", flexDirection: "clomun", justifyContent: 'center' }} >
                        <Sheet variant="soft" sx={{textAlign: "center"}}>
                            <Typography level="title-md">{ image.alt_description}</Typography>
                        </Sheet>
                    </Box>
                </Card>
            </Container>
        </>
    );
}

export default Page;