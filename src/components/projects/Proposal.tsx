import { Grid } from "@mui/material"
import PreviewCard from "./PreviewCard"

const Proposal = () => {
    const sections = [
        {
            key: "sample-proposal",
            title: "Sample Digital Presence Boost Proposal",
            link: "https://www.canva.com/design/DAG1e5GFEhA/qizKPfPpvA_RFBeRb0vAZQ/view?utm_content=DAG1e5GFEhA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0d70e9712e",
            imgSrc: "assets/designs/proposals/digital-presence.png",
        },
        {
            key: "sample-36-touches-proposal",
            title: "Sample 36 Touches Proposal",
            link: "https://www.canva.com/design/DAG2JKyzAaA/6kbvmE4jqWVv0B3qNEnN2g/view?utm_content=DAG2JKyzAaA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf6b78f7403",
            imgSrc: "assets/designs/proposals/36-touches.png",
        },
        {
            key: "wfg-proposal",
            title: "WFG Social Media Strategy Proposal",
            link: "https://www.canva.com/design/DAG2WNobAvM/Yd4V53Wh5uSxwLsOIg1xtA/view?utm_content=DAG2WNobAvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h81877615c0",
            imgSrc: "assets/designs/proposals/wfg-proposal.png",
        }
    ]
    return (
        <div>
            <Grid
                container
            >
                {sections.map((section, idx) => (
                    <Grid
                        key={section.key}
                        size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}
                        sx={{ paddingRight: "4px", paddingBottom: `${idx === sections.length - 1 ? '0' : '4px'}` }}
                    >
                        <PreviewCard
                            key={section.key}
                            title={section.title}
                            link={section.link}
                            imgSrc={section.imgSrc}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Proposal