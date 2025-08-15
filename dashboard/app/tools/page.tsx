"use client";
import { Box, Typography, Paper } from "@mui/material";

export default function ToolsPage() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={2}>Quick Tools</Typography>
        <Typography>Tool shortcuts and integrations coming soon!</Typography>
      </Paper>
    </Box>
  );
}
