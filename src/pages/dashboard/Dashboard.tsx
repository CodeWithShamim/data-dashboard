import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <Box>
      <Grid container gap={3} className={styles.topCardsContainer}>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>

      <Grid xs={12} marginY={2}>
        <Paper className={styles.dataCard}>xs=8</Paper>
      </Grid>
    </Box>
  );
}

export default Dashboard;
