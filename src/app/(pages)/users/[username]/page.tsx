import { UnsplashImage } from "@/app/utils/unsplashImage";
import { UnsplashUser } from "@/app/utils/unsplashUser";
import { AspectRatio, Box, Card, Container, Sheet, Typography,Grid } from "@mui/joy";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";

// ? component import 
import User from "@/components/users/User";
import { Metadata } from "next";

interface PageProps {
    params: {
     username: string   
    }
}

const getUser = async (username: string)  : Promise<UnsplashUser> => {
    const response = await fetch(
        `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    if (response.status === 404) notFound()

    return  await response.json()
}

export const generateMetadata = async ({ params: { username } }: PageProps)  : Promise<Metadata> => {
    const user: UnsplashUser = await getUser(username);
    return {
        title: user.username
    }
}

const Page = async ({params  : {username} }: PageProps) => {
    
    const user: UnsplashUser = await getUser(username);
    
    console.log(user);

    return (
        <>
            <Container maxWidth="md" sx={{ color: "white", mt: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "70vh", position: "absolute" }} >
                    <Sheet  variant="soft" sx={{borderRadius: 5, p: 2, m: 4, width: "50%"}}  >
                        <Typography level="title-lg">
                            <strong> this page uses generateMetadata</strong> to dynamically set the page title from the Api Response
                        </Typography>
                    </Sheet>
                    <User user={user} />
            </Container>
        </>
    )
}

export default Page;