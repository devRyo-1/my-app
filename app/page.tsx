// app/page.tsx

import * as React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";

export default function HomePage() {
  return (
    <>
      <CssBaseline /> {/* ベーススタイルをリセット */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            MUI + Next.js サンプル
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          ようこそ！
        </Typography>
        <Typography variant="body1" paragraph>
          Next.js アプリケーションで MUI コンポーネントを使うサンプルです。
        </Typography>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" color="primary">
            クリックしてね
          </Button>
        </Box>
      </Container>
    </>
  );
}
