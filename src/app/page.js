import { Box, Grid } from "@mui/material";

export default function Home() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h1>Latest News</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>SideBar</h1>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
