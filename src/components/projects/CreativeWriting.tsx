import colors from "@/utils/colors"

const CreativeWriting = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: "5px", alignItems: "flex-end" }}>
            <span>Sneak a peek to my thoughts at&nbsp;</span>
            <h3 style={{ margin: 0, padding: 0 }}>
                <a
                    href="https://wondererxwanderer.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontWeight: 'bold',
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s, font-size 0.2s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = colors.secondary;
                        e.currentTarget.style.fontSize = '1.4em';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = 'inherit';
                        e.currentTarget.style.fontSize = '1em';
                    }}
                >
                    wondererxwanderer
                </a>
            </h3>
            !
        </div>
    )
}

export default CreativeWriting