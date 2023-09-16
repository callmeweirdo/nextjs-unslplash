"use client"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { UnsplashUser } from '@/app/utils/unsplashUser';
import Image from 'next/image';



export default function User({user}: UnsplashUser) {
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        size="lg"
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)',
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })}
      >
        <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: 'contents',
            '--AspectRatio-paddingBottom':
              'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
          }}
        >
          <Image
            src={user.profile_image.large}
            alt={user.username}
            fill
          />
        </AspectRatio>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="title-lg">
                <Link
                  href="#container-responsive"
                  overlay
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                >
                  {user.location}
                </Link>
              </Typography>
              <Typography level="body-sm">{user.instagram_username}</Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: 'auto', alignSelf: 'flex-start' }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <Image
            src={user.profile_image.large}
            alt={user.username}
            fill
          />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar variant="soft" color="neutral">
              Y
            </Avatar>
            <div>
              <Typography level="body-xs">Designed by</Typography>
              <Typography level="body-sm">{user.username}</Typography>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
