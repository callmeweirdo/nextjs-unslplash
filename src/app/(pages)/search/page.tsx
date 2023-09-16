import { UnsplashImage } from "@/app/utils/unsplashImage";
import { UnsplashUser } from "@/app/utils/unsplashUser";
import { AspectRatio, Box, Card, Container, Sheet, Typography,Grid } from "@mui/joy";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import Search from "./search";
const Page = async () => {
    return (
        <Container maxWidth="md" sx={{mt:5}} >
            <Box>
                <Search />
            </Box>
        </Container>
    )
}



export default Page;