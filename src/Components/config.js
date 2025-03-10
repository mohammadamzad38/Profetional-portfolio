const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcon = [
   {
        id: 1,
        path: "M12 2.04C6.48 2.04 2 6.52 2 12.04c0 4.86 3.44 8.89 8 9.75v-6.9h-2.4v-2.85h2.4v-2.2c0-2.38 1.45-3.7 3.58-3.7 1.02 0 2.1.18 2.1.18v2.3h-1.19c-1.17 0-1.53.72-1.53 1.46v1.96h2.6l-.42 2.85h-2.18v6.9c4.56-.86 8-4.89 8-9.75 0-5.52-4.48-10-10-10z"
      },
      {
        id: 2,
        path: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-1.94c-3.2.69-3.87-1.54-3.87-1.54-.53-1.37-1.3-1.73-1.3-1.73-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.2 1.8 1.2 1.05 1.79 2.76 1.28 3.43.98.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.2 1.18.92-.26 1.91-.4 2.89-.4.98 0 1.97.14 2.89.4 2.22-1.5 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.8 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.79 1.05.79 2.12v3.14c0 .3.21.65.8.55 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.65 18.35.5 12 .5z"
      },
      {
        id: 3,
        path: "M23 2.99a9.18 9.18 0 01-2.6.71 4.52 4.52 0 001.98-2.48 9.04 9.04 0 01-2.86 1.1A4.51 4.51 0 0016 1c-2.5 0-4.53 2.03-4.53 4.53 0 .35.04.7.12 1.02-3.76-.19-7.1-2-9.33-4.74a4.55 4.55 0 00-.61 2.28c0 1.57.8 2.95 2 3.76a4.47 4.47 0 01-2.05-.57v.06c0 2.2 1.56 4.04 3.62 4.46a4.58 4.58 0 01-2.04.08c.57 1.79 2.23 3.1 4.2 3.13a9.08 9.08 0 01-5.62 1.94c-.36 0-.72-.02-1.08-.06a12.83 12.83 0 006.93 2.03c8.3 0 12.84-6.88 12.84-12.85 0-.2-.01-.4-.02-.6A9.2 9.2 0 0023 2.99z"
      },
      {
        id: 4,
        path: "M4.98 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm.02 3H.96v14h4.04V6.5zm7.95 0h-3.98v14h3.98v-7c0-1.8 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25v7h3.98v-7c0-4.16-3.38-7.5-7.5-7.5s-7.5 3.34-7.5 7.5v7z"
      }
]