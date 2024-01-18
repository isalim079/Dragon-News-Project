

import { Grid } from "@mui/material";

const HomePage = () => {
  // throw new Error();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Latest news</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>SIde bar</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
