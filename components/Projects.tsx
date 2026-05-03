"use client"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActionArea from "@mui/material/CardActionArea"
import colors from "@/utils/colors"

function ProjectCards() {
  const items = [
    {
      title: "Bloomoji",
      img: "/projects/bloomoji.png",
      description: `A virtual emoji flower bouquet maker built with React and Next.js. 
        Users can create and customize their own bouquets, then share them with friends via unique links. 
        No user information is collected. Bouquet configuration is stored in the URL for easy sharing.`,
      onClick: () => {
        window.open("https://bloomoji.jovihanni.com", "_blank")
      },
    },
    {
      title: "Blog",
      img: "/projects/blog.png",
      description: `Website for my creative writing pieces
        developed using VueJS and Vuetify framework,
        then deployed on Netlify.`,
      onClick: () => {
        window.open("https://wondererxwanderer.jovihanni.com", "_blank")
      },
    },
    {
      title: "Hulagway",
      img: "/projects/hulagway.png",
      description: `Image gallery to manage local storage images meant to be hosted locally along with
        tools like Tailscale for outside the network access.
        Created using ReactJS, Next.js, and Tailwind CSS.`,
      onClick: () => {
        window.open("https://github.com/JovihanniCasenas/hulagway", "_blank")
      },
    },
    {
      title: "High Low",
      img: "/projects/highlow.png",
      description: `A simple card game where the player guesses if the next card will be higher or lower than the current card. 
        Developed using Flutter and can be played via mobile, desktop, or web.`,
      onClick: () => {
        window.open(
          "https://jovihannicasenas.github.io/high-low-game-web-app/#/",
          "_blank",
        )
      },
    },
  ]

  return (
    <>
      {items.map((item, index) => (
        <Card
          sx={{
            width: "100%",
            backgroundColor: "transparent",
            color: colors.textLight,
            boxShadow: 0,
            marginBottom: 2,
          }}
          key={index}
        >
          <CardActionArea onClick={item.onClick}>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt={item.title}
              sx={{
                maxHeight: "200px",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <CardContent sx={{ backgroundColor: "transparent" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  )
}

export default function Projects() {
  return (
    <div>
      <section id="projects" className="text-2xl font-bold mb-2">
        Projects
      </section>
      <ProjectCards />
    </div>
  )
}
